#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <string.h>
#include "project_header.h"

// Read entire file into memory
char* read_file(const char* path, size_t* out_size) {
    FILE* f = fopen(path, "rb");
    if (!f) return NULL;
    fseek(f, 0, SEEK_END);
    size_t size = ftell(f);
    rewind(f);
    char* buffer = malloc(size);
    fread(buffer, 1, size, f);
    fclose(f);
    *out_size = size;
    return buffer;
}

// Minimal JSON parser to get value by key (assumes simple format)
char* get_json_value(const char* json, const char* key) {
    char* keyPos = strstr(json, key);
    if (!keyPos) return NULL;

    char* colon = strchr(keyPos, ':');
    if (!colon) return NULL;

    char* firstQuote = strchr(colon, '\"');
    if (!firstQuote) return NULL;
    firstQuote++;

    char* secondQuote = strchr(firstQuote, '\"');
    if (!secondQuote) return NULL;

    size_t len = secondQuote - firstQuote;
    char* value = malloc(len + 1);
    strncpy(value, firstQuote, len);
    value[len] = '\0';
    return value;
}

int main() {
    size_t jsonSize;
    char* jsonData = read_file("AmiChiam-conf.json", &jsonSize);
    if (!jsonData) { printf("Cannot read AmiChiam-conf.json\n"); return -1; }
    jsonData[jsonSize] = '\0'; // Null-terminate

    // Extract paths from JSON
    char* payloadPath = get_json_value(jsonData, "payload");
    char* certPath    = get_json_value(jsonData, "cert");
    char* outputPath  = get_json_value(jsonData, "output");

    if (!payloadPath || !certPath || !outputPath) {
        printf("JSON missing required paths\n");
        free(jsonData); free(payloadPath); free(certPath); free(outputPath);
        return -1;
    }

    // Read payload
    size_t payloadSize;
    char* payload = read_file(payloadPath, &payloadSize);
    if (!payload) { printf("Cannot read payload\n"); goto cleanup; }

    // Read certificate
    size_t certSize;
    char* cert = read_file(certPath, &certSize);
    if (!cert) { printf("Cannot read certificate\n"); goto cleanup; }

    // Build header
    PROJECT_HEADER header = {0};
    header.HeaderSize   = sizeof(PROJECT_HEADER);
    header.Flags        = 0;
    header.Magic        = PROJECT_MAGIC;
    header.VersionMajor = 1;
    header.VersionMinor = 0;
    header.PayloadSize  = (uint32_t)payloadSize;
    header.CertSize     = (uint32_t)certSize;

    // Write final package
    FILE* output = fopen(outputPath, "wb");
    if (!output) { printf("Cannot create output\n"); goto cleanup; }

    fwrite(&header, sizeof(header), 1, output);
    fwrite(payload, 1, payloadSize, output);
    fwrite(cert, 1, certSize, output);
    fclose(output);

    printf("Package created successfully: %s\n", outputPath);

cleanup:
    free(jsonData);
    free(payloadPath);
    free(certPath);
    free(outputPath);
    free(payload);
    free(cert);
    return 0;
}