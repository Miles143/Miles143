// Cominational Circuits //


Ex: The output of the Two AND Gates is used as the input to the OR Gate.
A and B are connected, the dot indicates the inputs are connected, otherwise
A would be "jumping over" B, without affecting each other.
          ___
	A__•_(   )_ D
	 __|_(___) |         ___
	B  |       |________(   )__ X
	   |	       _____(___)
	   |  ___      |
	   |_(   )_____|
  C _____(___)  	E								
													

  Boolean Expression:
  	X=(AB+AC)												
												
			Truth Table:

						A B C D E X
					//	0 0 0 0 0 0
					//	0 0 1 0 0 0
					//	0 1 0 0 0 0
					//	0 1 1 0 0 0
					//	1 0 0 0 0 0
					//	1 0 1 0 1 1
					//	1 1 0 1 0 1
					 	1 1 1 1 1 1
					
					  												
													
														
													
														
																				


/**
 * 
 */