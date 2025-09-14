// Computers, Electricity, and Gates //


Electrical Signals:
0-2V = "LOW"
2-5V = "HIGH" <- which is equal to 1 

Gates:
A gate accepts one or more one or more inouts, and produces a single output.
Circuits can be designed to perform arthmetic functions, and to store one or
values. Boolean alegebra by George Boole. Allowable circuit logic allocation,
using mathematical notations.

1(circuit)->1(circuit)
   Gate	  ->   Gate

 Logic Diagram:
 
 graphical repersentation symbol.
 Ex: The last circuit being the end result of the chain of gates.
 All the power/current flows in this repersentation, downwards.
 
 A            
 	AND->AB       
 B             
_____________ 
 A		  __
    NAND->AB
 B
 ____________
           _
 A -> NOT->A
 
 ____________
 A
 	OR->A+B
 B
 ____________
 A
 	XOR->A⊕B
 B
 ____________
 A		   ___
     XNOR->A⊕B
 B
 ____________
 
 A       ___
 	NOR->A+B
 B
 
 Truth Table:
 Truth tables defines the function of a gate, by listing all possible,
 input cobinations that the gate could encounter.
 Ex: 
 INPUT 			 OUTPUT
  True			  True
   False            True
 
/**
 * 
 */