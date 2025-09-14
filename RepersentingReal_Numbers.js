// Repersenting Real Numbers //


In binary the base is 2, since we are not working in base 10, the decimal point is referred to as
a radix point. This term can be used in any base. Positions to the right of the radix point in
binary are the halves position (ex: one half) the quaters position (one quater), etc.

Store the value as an integer and include information showing where the radix point is.
Any real value has three properties the sign(pos/neg), the mantissa, which is made up of
the digits in the value with the radix point assumed to be to the right, and the exponent,
which determines the how the radix point is shifted relative to the mantissa.
ex formula: sign * mantissa * 10exp

Real Value:            Floating-Point Value:
12001.00               12001*10(0)
-120.01               -12001*10(-2)
0.12000                12000*10(-5)
-123.10               -12310*10(-2)
155555000.00           155555*10(3)

Binary-Floating-point
sign * mantissa * 2(exp) <- (2 being the base, and the rest as normal real number scheme.)

if for example we devote 64bits for/of a floating-point value, we would use 1 bit for the sign,
11 bits for the exponent, and 52bits for the mantissa.
Rule of thumb: anytime you are turning a whole number into a fraction, you would divide the quotient
to the left, and you could divide again and agin until the quotient becomes zero as at the same time
the place value of the rightside of the decimal point would become larger.
converting ex: .75 * 2 = 1.50
			   .50 * 2 = 1.00
		thus .75 in decimal is .11
		
simple format explaination to self:
									.435 * 2 = 0.870 <-- continue mulitplication by 2 until you have 
									.870 * 2 = 1.740
									.740 * 2 = 1.480
									.480 * 2 = 0.960
									.960 * 2 = 1.920
									.920 * 2 = 1.840 <-- the numbers to the left of the decimal going down are the binary.

example of the division process(long form): decimal to be converted to binary: 20.25
											    
											20 / 2 = 0 <- twenty (which is two in the tenth spot) is our first number to convert.
											10 / 2 = 0  
											 5 / 2 = 1 <- end 0f converting 20 to binary. result is 101
											 
										   .25 * 2 = 0.50
										   .50 * 2 = 1.00 <- coverting a number with a "remainder or fractional value,
										   					 should be done seperately. In steps or "parts"
/**
 * 
 */