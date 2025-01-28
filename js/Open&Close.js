 
    var videoPlayer = document.getElementById("videoPlayer");
    var myVideo = document.getElementById("myVideo");

    function stopVideo() {
      videoPlayer.style.display = "none";
    }

    function playVideo(file) {
      myVideo.src = file;
      videoPlayer.style.display = "block";
    
    }

    function playVideo(src) {
      var videoPlayer = document.getElementById('videoPlayer');
      var video = document.getElementById('myVideo');

      video.src = src;
      videoPlayer.style.display = 'block';
      video.play();
    }

    function stopVideo() {
      var videoPlayer = document.getElementById('videoPlayer');
      var video = document.getElementById('myVideo');

      video.pause();
      video.currentTime = 0;
      videoPlayer.style.display = 'none';
    
    }
    
    document.addEventListener("DOMContentLoaded", function() {
      var desplegableItems = document.querySelectorAll('.desplegable-content a');
      for (var i = 0; i < desplegableItems.length; i++) {
        desplegableItems[i].addEventListener('click', function() {
          // Ocultar el menú desplegable al hacer clic en una opción
          document.querySelector('.desplegable-content').style.display = 'none';
        });
      }
    });


