// Adders //


Simple types of addition are/is carried out by special circuits called adders.
This takes place at a digital logic level performed in binary.
	Like addition in any base, the result of adding two binary numbers could 
	produce a carry value. // Ex: 1+1=10 in base two, a circuit that computes
	the sum of two bits and produces the correct carry bit is called a half adder.
	
	Ex: A+B <-- both binary digits A+B = 1 the sum is 0 and the carry is 1.
	
	
		Truth Table:
		
			A	B	SUM	CARRY
		 // 0	0	0	0
		 // 0	1	1	0
		 // 1	0	1	0
		 // 1	1	0	1
			
			Logic Circuit:
			
			                 XOR___
			         A_____•__|(___)____Sum                           
			         B•____|__|(___)                 
			          |    |                      
			          |    |                   
			          |    | AND___               
			          |    |___(   )___Carry
                      |________(___)
					  
					  
			        Boolean Expression for this Circuit:
								Sum = A⊕B
								Carry = AB
					  
Note: Note that a half carry does NOT take into account a possible carry value
in the calculation(carry-in). Half adder is fine for adding two binary values
with mulitple digits each, but a cicuit called a Full-Adder takes the carry-in
value into account Two half-adders can be used to create a full-adder. 

Ex: Truth Table for Two Half-Adders:

	        A	B   Carry-in	Sum	Carry-out
		//	  0	0	0			0	0
		//	  0	0	1			1	0
		//	  0	1	0			1	0
		//	  0	1	1			0	1
		//	  1	0	0			1	0
		//	  1	0	1			0	1
		//	  1	1	0			0	1
		//	  1	1	1			1	1
			
			Logic Diagram:
			
			                Carry-in
			      ___         |       ___
	  A_____•___|(XOR)_•      •_____|(XOR)___Sum
	  B__•__|___|(___)  |  ___|_____|(___)
		 |  |           | |
		 |  |           | |  ___
         |  |           | |_(AND)___
         |  |           |___(___)   |    ___
         |  |   ___                 |___( OR)___Carry-out
		 |  |__(AND)____________________(___)	
         |_____(___)
Note: There are three inputs this time A, B and the Carry-in.	
/**    
 * 
 */