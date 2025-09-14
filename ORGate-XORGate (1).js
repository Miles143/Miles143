// OR Gates. XOR Gates //


OR Gates:
If Both inputs are 0 the output is also 0, otherwise the output is 1.
Ex:
Boolean Expression:
	X=A+B
		
			Logic Diagram:
				  A
		 			--►
			  			X
		 			--►
				  B
				   
				  Truth Table:
				   A	B	X
         		   0    0   0
				   0	1	1
				   1	0	1
				   1	1	1
				   
XOR Gates:
An XOR gate produces a 0 if both inputs are the same, otherwise it produces a 1.
They differ in one input sitation, when both inputs are 1, the output using an
OR gate produces a 1, and an XOR gate produces a 0.

Boolean Expression:
				X=A⊕B

            Logic Diagram:
                  A
         			--►
              			X
         			--►
                  B
                   
                  Truth Table:
                   A	B	X
                   0	0	0
                   0	1	1
                   1	0	1
                   1	1	0
/**
 * 
 */