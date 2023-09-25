
function activarSonido() {
    var miAudio = document.getElementById('Audio'); 
  
    if (miAudio) {
      miAudio.muted = false; 
      miAudio.volume = 0.1;
      miAudio.setAttribute('loop', 'true'); 
    }
  }
  
  
  
  
  
  
  