$(document).ready(function(){
  // playSound();
  pauseSounds();
  startSounds();
  javascriptPlay();
});





var playSound = function(){
  $(document).keydown(function(e){
    // console.log('key was pressed');
    if(e.which === 65) {
      var myAudio = document.getElementById('soundA');
      myAudio.addEventListener('ended', function(){
        this.currentTime = 0;
        this.play();
      }, false);
      myAudio.play();
      $('.keyboard-colors').css('background', '#00a0a6');
      return false;
    } else if (e.which === 66) {
      var clipB = document.getElementById('sound1');
      clipB.addEventListener('ended', function(){
        this.currentTime = 0;
        this.play();
      }, false);
      clipB.play();
      $('.keyboard-colors').css('background', '#99f4f8');

    };
  });
};


var javascriptPlay = function(){
  var clipData = {
  65: {
    letter: 'a',
    id: 'a-clip',
    key: 65,
    clip: 'a-smooth1.wav',
    color: '#44BEC1'
  },
  66: {
    letter: 'b',
    id: 'b-clip',
    key: 66,
    clip: 'b-beats-flow.wav',
    color: '#AAE0A3'
  },
  67: {
    letter: 'c',
    id: 'c-clip',
    key: 67,
    clip: 'c-beatslite.aif',
    color: '#477EC2'
  },
  68: {
    letter: 'd',
    id: 'd-clip',
    key: 68,
    clip: 'd-singing-kid.wav',
    color: '#98BFDD'
  },
  69: {
    letter: 'e',
    id: 'e-clip',
    key: 69,
    clip: 'e-bassbeat.wav',
    color: '#B48CD9'
  },
  70: {
    letter: 'f',
    id: 'f-clip',
    key: 70,
    clip: 'f-fastinsidebeat.wav',
    color: '#95327E'
  },
  71: {
    letter: 'g',
    id: 'g-clip',
    key: 71,
    clip: 'g-whistleslide.wav',
    color: '#88D78E'
  },
  72: {
    letter: 'h',
    id: 'h-clip',
    key: 72,
    clip: 'h-guitar.wav',
    color: '#d53e4f'
  },
  73: {
    letter: 'i',
    id: 'i-clip',
    key: 73,
    clip: 'i-slowbeats.wav',
    color: '#f46d43'
  },
  74: {
    letter: 'j',
    id: 'j-clip',
    key: 74,
    clip: 'j-hiphop.wav',
    color: '#fdae61'
  },
  75: {
    letter: 'k',
    id: 'k-clip',
    key: 75,
    clip: 'k-hiphopbeat.wav',
    color: '#fee08b'
  },
  76: {
    letter: 'l',
    id: 'l-clip',
    key: 76,
    clip: 'l-insidebeat.wav',
    color: '#ffffbf'
  },
  77: {
    letter: 'm',
    id: 'm-clip',
    key: 77 ,
    clip: 'z-synth.wav',
    color: ''
  },
  78: {
    letter: 'n',
    id: 'n-clip',
    key: 78,
    clip: 'n-singing-soul.wav',
    color: '#e6f598'
  },
  79: {
    letter: 'o',
    id: 'o-clip',
    key: 79,
    clip: 'o-downbeat.wav',
    color: '#abdda4'
  },
  80: {
    letter: 'p',
    id: 'p-clip',
    key: 80,
    clip: 'p-electropop.wav',
    color: '#66c2a5'
  },
  81: {
    letter: 'q',
    id: 'q-clip',
    key: 81,
    clip: 'q-bubbles.wav',
    color: '#3288bd '
  },
  82: {
    letter: 'r',
    id: 'r-clip',
    key: 82,
    clip: 'r-latinbeats.mp3',
    color: '#1a1334'
  },
  83: {
    letter: 's',
    id: 's-clip',
    key: 83,
    clip: 's-electrobeat.wav',
    color: '#26294a'
  },
  84: {
    letter: 't',
    id: 't-clip',
    key: 84,
    clip: 't-singing-beats.wav',
    color: '#01545a'
  },
  85: {
    letter: 'u',
    id: 'u-clip',
    key: 85,
    clip: 'u-singing-hop-hop-vocals.wav',
    color: '#017351'
  },
  86: {
    letter: 'v',
    id: 'v-clip',
    key: 86,
    clip: 'v-piano.wav',
    color: '#03c383'
  },
  87: {
    letter: 'w',
    id: 'w-clip',
    key: 87,
    clip: 'w-roboticonfusion.wav',
    color: '#aad962'
  },
  88: {
    letter: 'x',
    id: 'x-clip',
    key: 88,
    clip: 'x-wobble-dub.wav',
    colors: '#fbbf45'
  },
  89: {
    letter: 'y',
    id: 'y-clip',
    key: 89,
    clip: 'y-whistehappy.wav',
    color: '#710162'
  },
  90: {
    letter: 'z',
    id: 'z-clip',
    key: 90,
    clip: 'm-robotic-plank.wav',
    color: '#110141'
  }
}


// on keydown, find out which key was pressed
// loop through clipData and find the object that matches the key
// with the object:
  // append the audio element which needs id and clip name
  // change the background of the main div
  // create a variable for the clip
  // play the variable clip

  $(document).keydown(function(e){
    var keyNum = e.keyCode;
    var keyChar = String.fromCharCode(keyNum).toLowerCase();
    console.log(keyChar)
    var clip = clipData[keyNum]
    if(keyChar == clip.letter) {
      console.log("keycode matches the key");
      var audioElement = '<audio id="' + clip.id + '" src="imgs/' + clip.clip + '"></audio>';
      $('.keyboard-colors').append(audioElement)

      var myAudio = document.getElementById(clip.id.toString());
      // console.log($(audioElement)[0]);
      // console.log(myAudio);
      myAudio.addEventListener('ended', function(){
        this.currentTime = 0;
        this.play();
      }, false);
      myAudio.play();
      $('.keyboard-colors').css('background', clip.color);
      return false;

    } else {
      console.log("the matching didn't work");
    }

    //   var audioElement = '<audio id="' + id + '" src="imgs/' + clip + '"></audio>';
    //   $('.keyboard-colors').append(audioElement);
    // }
  })
};

var pauseSounds = function(){
  $('#pause-button').on('click', function(){
    var myAudio = document.getElementById('soundA');
    var myAudio2 = document.getElementById('sound1');
    myAudio.pause();
    myAudio2.pause();
  })
}

var startSounds = function(){
  $('#start-button').on('click', function(){
    var myAudio = document.getElementById('soundA');
    myAudio.play();
  })
};