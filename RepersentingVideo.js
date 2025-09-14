// Repersenting Video //

Codec:
COmpressor/DECompressor <-- 2 types of compression: termporal and spatial.
temporal: looks for the difference between consecutive frames. 

Codecs: Method to shrink the movie size. Codecs are block oriented(each frame is
divided in rectangular blocks, the codec differs depending on how the blocks are
encoded.)

Temporal compression:
keyframe | delta frame | delta frame | delta frame | delta frame | continues...


keyframe <-- initial frame, delta frame <-- only the changes are stored called a
delta frame. 

Spatial compression:
Stores the color and the cordinates instead.
Similar to run-length encoding.



/**
 * 
 */