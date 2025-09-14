// Signed-Magnitude representation && Fixed-Size Numbers //

Signed Magnitude representation
--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+-
 -9 -8 -7 -6 -5 -4 -3 -2 -1 -0 +0  1  2  3  4  5  6  7  8  9

	
Fixed-Size Numbers
  50   51  ...  97 98 99 0  1  2  3 ... 48 49
  +----+----+---+--+--+--+--+--+--+-----+--+
 -50  -49  ... -3 -2 -1  0  1  2  3 ... 48 49
 
 Note simply add the numbers and discard and carry.
 Example Lets try (1)adding a positive number to a negative number,
 	(2)a negative number and a positive number,
 		(3)and two negative numbers.
  Addition 		
Signed-Magnitude	New Scheme
(1)  5 + -6 = -1		5 + 94 = 99

(2) -4 + 6 = 2		    96 + 6 = 2

(3) -2 + -4 = -6 		98 + 96 = 94

  Subtraction       New Scheme    Add Negative
Tens-Complement
(1) -5 - 3 = -8 
    			    95 - 3 = 
                                   95 + 97 = 92

________________________________________________

Since storing somethings in binary we can use the equivilent of the tens-complement system,
	called two's complement.
	

 Twos-Complement

   127     126     ...    2            1          0         -1        -2        -3      ...  -126     -127       -128
---+-------+--------------+------------+----------+----------+---------+---------+------------+---------+---------+---
01111111  01111110 ... 00000010    00000001     00000000   11111111   11111110  11111100 ... 10000010  10000001  10000000


/**
 * 
 */