// Circuits As Memory //


The S-R Latch:

	An S-R Latch stores a single binary digit. In This example X and Y are always
	compliments of each other. That is, when X=0, Y=1 and When X=1, Y=0. The value
	of X at any point in time is considered the current state of the circuit.
	Therefore if X=1, the circuit will store a 1, if X=0 the circuit will store a 0.
	
	Ex: Suppose, the current state of the circuit is storing a 1(that is, X=1), and 
	Suppose both S and R are 1. Then Y remains 1 and X=0, Therefore no matter which 
	value is being stored, if both inout value S and R are 1, the circuit keeps its 
	existing state.

	                                                         
	       Ex:          ___
		   		S=0____(   )○__●___X <-----X beccomes 1
		          _____(___)   |                      
	             |  ___________|                    
	             |__|___________                                
	                |           |
			        |           |
			  	    |   ___     |                               
	                |__(   )○___●__Y <-----Y becomes 1, and storing 1                               
	            R=1____(___)                              
	
		// Setting S=0, and R=1, X becomes 1. Running Y input through S NAND Gate,
		// storing the 1 value and outputting the 1 value. S must immediately be 
		// returned to 1 in order to continue a 1 value after the completion of the
		// circuit.  
		
		   Ex2:                     
		                        ___
		                S=1____(   )○__●___X <-----X beccomes 0
				          _____(___)   |                      
			             |  ___________|                    
			             |__|___________                                
			                |           |
					        |           |
					  	    |   ___     |                               
			                |__(   )○___●__Y <-----Y becomes 0, and storing 0                               
			            R=0____(___)                              
		
		 		
	 			// In Ex2 we set the latch to 0, momentarily setting R=0, while keeping
				// S at 1, Y becomes 0, and X becomes 0, the circuit state remains 0. 
/**
 * 
 */