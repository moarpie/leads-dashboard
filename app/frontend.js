var socket = io.connect('http://localhost:3000');

//Do stuff on received socket from server
socket.on('update-msg', function (msg) {
    console.log(msg);
    $('.alert').addClass('show')
    $('#message').html(msg.data);

    //Play audiofile
    $("#myAudio")[0].play();

    //Make fireworks with confetti.js
    var end = Date.now() + (5 * 1000);
    var interval = setInterval(function() {
        if (Date.now() > end) {
            return clearInterval(interval);
        }
        confetti({
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            shapes: ['square'],
            origin: {
                x: Math.random(),
                // since they fall down, start a bit higher than random
                y: Math.random() - 0.2
            }
        });
    }, 200);

    //Fade out alert after set seconds
    setTimeout(
      function()
      {
        $('.alert').removeClass('show')
      }, 30000);
});


$(document).ready(function(){
  //Set your different data reports here
  var locations = [
    "https://datastudio.google.com/embed/reporting/1d100e70-2065-4fab-81f3-0b9417b5eabb/page/c2P1",
    "https://datastudio.google.com/embed/reporting/1d100e70-2065-4fab-81f3-0b9417b5eabb/page/c2P1"
  ];

  var len = locations.length;
  var iframe = $('#frame');
  var i = 0;
  setInterval(function () {
     iframe.attr('src', locations[++i % len]);
   }, 6000000); //Timer for how long a dashboard is shown
});

//clock
var clock = document.getElementById('clock');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  clock.textContent = h + ":" + m + ":" + s;
}
setInterval(time, 1000);

//Reload entire page on a timer (used to automatically push changes to screens)
setTimeout(function(){
   window.location.reload(1);
}, 3600000);
