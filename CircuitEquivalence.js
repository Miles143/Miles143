// Circuit Equivalence //


Ex:
  Boolean Expression:
  	Distributive Law:
  		A(B+C) = AB + AC

Logic Diagram:
                       ___
  A___________________(   )______A(B+C) 
             ___     _(___)
  B_________(   )___|                                                                           
  C_________(___)    B+C                                                          
                                                
   Truth Table:
   
       A   B   C   B+C   A(B+C)
  //   0   0   0    0     0
  //   0   0   1    1     0
  //   0   1   0    1     0
  //   0   1   1    1     0
  //   1   0   0    0     0
  //   1   0   1    1     1
  //   1   1   0    1     1
  //   1   1   1    1     1 

  PROPERTY			AND							  OR
  Commutative	   AB =BA      				    A+B B+A
  Associative		(AB)C = A(BC) + (AC)	     (A+B)+C = A+(B+C)
  Distributive	   A(B+C) =  (AB) + (AC)		A+(BC) = (A+B)(A+C)
  Identity		   A1 = A	        	        A + 0 = A
  Complement	   A(A') = 0                    A +(A') = 1
  DeMorgan's law    (AB)' = A' OR B'             (A+B)' = A'B'		
  
  
  
  
                                          
/**
 * 
 */