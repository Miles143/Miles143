// KeywordEncoding RunLengthEncoding HuffmanEncoding //

Alphabetic information(text):
text compression:
Keyword Encoding:
Ex:

WORD	SYMBOL
as		^
the		~
and		+
that	$
must	&
well	%
these	#
— •   • •   — • —   — • —   • •
Run Length Encoding, or Recurrance Coding:
(a form of lossless compression)
Ex:
AAAAAAA						<-- this/any continous repetition is called a "run"
Using the '*' as our flag, this string would 
be encoded as: *A7
— •   • •   — • —   — • —   • •
Huffman Encoding:
Ex:
Huffman Code	Character
00				A
01				E
100				L
110				O
111				R
1010			B
1011			D
Ex: DOORBELL = 1011110110111101001100100
/**
 * 
 */