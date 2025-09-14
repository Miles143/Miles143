// NAND Gates, NOR Gates //



NAND Gate:
The NAND and NOR gates are essentially the opposite of the AND and OR gates, 
respectively. That is, the output of a NAND gate is the same as if you took the
output of an AND gate and it through an inverter (a NOT gate). NAND is the 
negation of an AND operation. Alike is, NOR the negation of an OR operation.

Boolean Expression:
	X=(A·B)'
	
	Logic Diagram Symbol:
		   A
		    --►·
		         X
			--►·
		   B
		   
		   Truth Table:
		   A 	B	X
		   0	0	1
		   0	1	1
		   1	0	1
		   1	1	0
		   
NOR Gate:
NAND and NOR gates have the same logic diamgram symbols except NAND and NOR use
the inversion bubble, as AND and OR gates do NOT. 

Ex:
Boolean Expression:
    X=(A+B)'
    
    Logic Diagram Symbol:
           A
            --►·
                 X
            --►·
           B
           
           Truth Table:
           A 	B	X
           0	0	1
           0	1	0
           1	0	0
           1	1	0

/**
 * 
 */