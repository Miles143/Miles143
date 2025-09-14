// Multiplexers //


A multiplexer is (often referred to as a mux) a general circuit that produces a
	single output signal. The output is equal to one of serveral input signals to
	the circuit. The input signal is selected by the multiplexer based on the value
	repersented by a few input signals, called select signals or select control 
	lines. The value of the three control lines(S0-S2) are interpreted as a binary
	number, which determines which input lines(D0-D7) to route to the output. The
	three select control lines S0-S2 represent 3 binary digits 0(S0),0(S1),0(S2), by
	the value of the binary digits used to repersent S0-S2 the select control line 
	(D0-D7) will be determined using the formal Truth Table.

Ex:

	//	In this example S0-S2 are the select control lines. S0-S2 determines which 
		//	of eight other input lines (D0-D7) are routed to the output(F). If S0-S2
		// are all 0(binary) then the input line D0 would be the output from the multiplexer.

₂ₙ		D0	D1	D2	D3	D4	D5	D6	D7
		______________________________
ₙ	S0 |                              |
	S1 |                              |------F
	S2 |______________________________|                         

	
	
		Truth Table:
		
		
		S0	S1	S2	F
		0	0	0	D0
		0	0	1	D1
		0	1	0	D2
		0	1	1	D3
		1	0	0	D4
		1	0	1	D5
		1	1	0	D6
		1	1	1	D7

	// A circuit called a demultiplexer(demux) performs the opposite operation, taking
		// a signle input and routing it to one of ₂ₙ outputs, depending in the values
		//of the ₙ select control lines.
/**
 * 
 */