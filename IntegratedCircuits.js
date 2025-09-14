// Integrated Circuits //



	An Integrated Circuit(also called a chip) is a piece if silicon on which 
	multiple gates have been embedded. These silicon pieces are mounted on a 
	plastic or ceramic package with pins along the edges that can be soldered
	onto circuit boards or inserted into appropriate sockets, each pin connects
	to the input or output of a gate, or to power or ground. Integrated Circuits
	are classified by the number of gates contained in them. These classifications
	also reflect the historical development if IC technology.
	
	
	Abbreviation				Name					 Number of Gates
	SSI						Small-Scale Integration		  1 to 10
	MSI						Medium-Scale Integration	  10 to 100
	LSI						Large-Scale Integration		  100 to 100,000
	VLSI					Very-Large-Scale Integration  more than 100,000

    VLSI <---- Are not independent as they are on a Small-Scale Integration.                                                                             
	                                                                          
	 14   13  12      11               10      9	    8                                  
	 |     | __|       |                 | ____|        |                                   
 ____|_____||__________|_________________||_____________|______	                                                                           
|  Power   ||	___    |                 ||   ___       |      |   
|	       ||__(   )○__|                 ||__(   )○_____|      |
|	       |___(___)                     |___(___)             |    
|	             ↑______________________________↑              |
|	                             |                             |
|	                        // NAND                            |
|	               ______________|________________             |
|                 _↓_                            _↓_           | 
|	      _______(   )○__                _______(   )○__       |
|	     |    ___(___)   |              |   ____(___)   |      |
|	     |   |           |              |  |            |   GND|
|________|___|___________|______________|__|____________|____|_|
	     |   |           |              |  |             |    |
	     |   |           |              |  |             |    |
         1   2           3              4  5             6    7
													   
													   
/**
 * 
 */