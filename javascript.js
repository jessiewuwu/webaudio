$(document).ready(function(){
  playSound();
  pauseSounds();
  startSounds();
});


var clipData = [
  {
    letter: 'a',
    key: 65,
    clip: 'a-smooth1.wav',
    color: '#44BEC1'
  },
  {
    letter: 'b',
    key: 66,
    clip: 'b-beats-flow.wav',
    color: '#AAE0A3'
  },
  {
    letter: 'c',
    key: 67,
    clip: 'c-beatslite.aif',
    color: '#477EC2'
  },
  {
    letter: 'd',
    key: 68,
    clip: 'd-singing-kid.wav',
    color: '#98BFDD'
  },
  {
    letter: 'e',
    key: 69,
    clip: 'e-bassbeat.wav',
    color: '#B48CD9'
  },
  {
    letter: 'f',
    key: 70,
    clip: 'f-fastinsidebeat.wav',
    color: '#95327E'
  },
  {
    letter: 'g',
    key: 71,
    clip: 'g-whistleslide.wav',
    color: '#88D78E'
  },
  {
    letter: 'h',
    key: 72,
    clip: 'h-guitar.wav',
    color: '#d53e4f'
  },
  {
    letter: 'i',
    key: 73,
    clip: 'i-slowbeats.wav',
    color: '#f46d43'
  },
  {
    letter: 'j',
    key: 74,
    clip: 'j-hiphop.wav',
    color: '#fdae61'
  },
  {
    letter: 'k',
    key: 75,
    clip: 'k-hiphopbeat.wav',
    color: '#fee08b'
  },
  {
    letter: 'l',
    key: 76,
    clip: 'l-insidebeat.wav',
    color: '#ffffbf'
  },
  {
    letter: 'm',
    key: 77 ,
    clip: 'z-synth.wav',
    color: ''
  },
  {
    letter: 'n',
    key: 78,
    clip: 'n-singing-soul.wav',
    color: '#e6f598'
  },
  {
    letter: 'o',
    key: 79,
    clip: 'o-downbeat.wav',
    color: '#abdda4'
  },
  {
    letter: 'p',
    key: 80,
    clip: 'p-electropop.wav',
    color: '#66c2a5'
  },
  {
    letter: 'q',
    key: 81,
    clip: 'q-bubbles.wav',
    color: '#3288bd '
  },
  {
    letter: 'r',
    key: 82,
    clip: 'r-latinbeats.mp3',
    color: '#1a1334'
  },
  {
    letter: 's',
    key: 83,
    clip: 's-electrobeat.wav',
    color: '#26294a'
  },
  {
    letter: 't',
    key: 84,
    clip: 't-singing-beats.wav',
    color: '#01545a'
  },
  {
    letter: 'u',
    key: 85,
    clip: 'u-singing-hop-hop-vocals.wav',
    color: '#017351'
  },
  {
    letter: 'v',
    key: 86,
    clip: 'v-piano.wav',
    color: '#03c383'
  },
  {
    letter: 'w',
    key: 87,
    clip: 'w-roboticonfusion.wav',
    color: '#aad962'
  },
  {
    letter: 'x',
    key: 88,
    clip: 'x-wobble-dub.wav',
    colors: '#fbbf45'
  },
  {
    letter: 'y',
    key: 89,
    clip: 'y-whistehappy.wav',
    color: '#710162'
  },
  {
    letter: 'z',
    key: 90,
    clip: 'm-robotic-plank.wav',
    color: '#110141'
  }
]

// var result = $.grep(clipData, function(e){return e.key == 89})
// console.log(result[0].clip);

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


// var javascriptPlay = function(clipData){
//   $(document).keydown(function(e){
//     // console.log('key was pressed');
//     if(e.which === clipData[0].key) {
//       var audioElement = '<audio id="' + id + '" src="imgs/' + clip + '"></audio>'
//       $('.keyboard-colors').append(audioElement);
//     };
//   });

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