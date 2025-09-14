// Repersenting Audio Information //

function Sound Sample() {
           const audioContext = new (window.AudioContext || window.webkitAudioContext)({
               sampleRate: 40000 // Setting the sampling rate to 40,000 Hz
           });
           
           const frequency = 440; // Frequency of A4 note
           const duration = 2; // Duration in seconds
           
           const sampleRate = audioContext.sampleRate;
           const buffer = audioContext.createBuffer(1, sampleRate * duration, sampleRate);
           const data = buffer.getChannelData(0);

           for (let i = 0; i < sampleRate * duration; i++) {
               data[i] = Math.sin(2 * Math.PI * frequency * (i / sampleRate));
           }

           const source = audioContext.createBufferSource();
           source.buffer = buffer;
           source.connect(audioContext.destination);
           source.start();
       }
	   
Ex: 
/**
 * 
 */