#pragma once
#include <stdint.h>

#define PROJECT_MAGIC 0x33343173656C694DULL  // "Miles143"

#pragma pack(push, 1)
typedef struct _PROJECT_HEADER
{
    uint32_t HeaderSize;
    uint32_t Flags;
    uint64_t Magic;        // 8-byte magic: "Miles143"
    uint16_t VersionMajor;
    uint16_t VersionMinor;
    uint32_t PayloadSize;
    uint32_t CertSize;

} PROJECT_HEADER;
#pragma pack(pop)

