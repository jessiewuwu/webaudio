$(document).ready(function(){
  // playSound();
  pauseSounds();
  startSounds();
  javascriptPlay();
  resetSounds();

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
      $('body').css('background', '#99f4f8');

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
    var allAudio = $('audio').get();
    for(var i=0; i < allAudio.length; i++){
      allAudio[i].pause();
    }
    // var myAudio = document.getElementById('soundA');
    // var myAudio2 = document.getElementById('sound1');
    // myAudio.pause();
    // myAudio2.pause();
  })
}

var startSounds = function(){
  $('#start-button').on('click', function(){
    var allAudio = $('audio').get();
    for(var i=0; i < allAudio.length; i++){
      allAudio[i].play();
    }
  })
};

var resetSounds = function(){
   $('#reset-button').on('click', function(){
    $('audio').remove();
    $('body').css("background", "#eee")
  });
}


var keyboardMap = {
  "type": "english",
  192: 0,
  49: 1,
  50: 2,
  51: 3,
  52: 4,
  53: 5,
  54: 6,
  55: 7,
  56: 8,
  57: 9,
  48: 10,
  189: 11,
  187: 12,
  8: 13,
  9: 14,
  81: 15,
  87: 16,
  69: 17,
  82: 18,
  84: 19,
  90: 20,
  85: 21,
  73: 22,
  79: 23,
  80: 24,
  219: 25,
  187: 26,
  13: 27,
  20: 28,
  65: 29,
  83: 30,
  68: 31,
  70: 32,
  71: 33,
  72: 34,
  74: 35,
  75: 36,
  76: 37,
  186: 38,
  222: 39,
  220: 40,
  16: 42,
  188: 43,
  89: 44,
  88: 45,
  67: 46,
  86: 47,
  66: 48,
  78: 49,
  77: 50,
  188: 51,
  190: 52,
  189: 53,
  16: 54,
  17: 56,
  18: 57,
  91: 58,
  32: 59,
  93: 60,
  18: 61,
  37: 62,
  38: 63,
  39: 65,
  40: 64,
  60: 43,
  44: 51,
  223: 11,
  45: 53,
  63: 11,
  43: 26
}

var keyboardKeys = {
  "type": "english",
  0: ["`","~"],
  1: ["!","1"],
  2: ["@","2"],
  3: ["#","3"],
  4: ["$","4"],
  5: ["%","5"],
  6: ["^","6"],
  7: ["&","7"],
  8: ["*","8"],
  9: ["(","9"],
  10: [")","0"],
  11: ["_","-"],
  12: ["+","="],
  // 13: [""],
  // 14: ["&#x21e5;"],
  15: ["Q"],
  16: ["W"],
  17: ["E"],
  18: ["R"],
  19: ["T"],
  20: ["Y"],
  21: ["U"],
  22: ["I"],
  23: ["O"],
  24: ["P"],
  25: ["{", "["],
  26: ["}","]"],
  27: ["&#x21a9;"],
  28: ["&#x21ea;"],
  29: ["A"],
  30: ["S"],
  31: ["D"],
  32: ["F"],
  33: ["G"],
  34: ["H"],
  35: ["J"],
  36: ["K"],
  37: ["L"],
  38: [":", ";"],
  39: ["\"", "'"],
  40: ["'","#"],
  42: ["&#x21e7;"],
  43: [">","<"],
  44: ["Z"],
  45: ["X"],
  46: ["C"],
  47: ["V"],
  48: ["B"],
  49: ["N"],
  50: ["M"],
  51: ["<",","],
  52: [">","."],
  53: ["?","/"],
  54: ["&#x21e7;"],
  55: ["fn"],
  56: ["ctrl"],
  57: ["alt","⌥"],
  58: ["cmd","⌘"],
  60: ["⌘","cmd"],
  61: ["alt","⌥"],
  62: ["&#9664;"],
  63: ["&#9650;"],
  64: ["&#9660;"],
  65: ["&#9658;"]
}

$(document).ready(function(){
  $("body").addClass("light");
  $("input").focus();
  $(".wrapper ul li").each(function(i){
    if(keyboardKeys[i]){
      if(keyboardKeys[i].length > 1){
        var string = "";
        if(i==58 || i==60){
          for(var j=0;j<keyboardKeys[i].length;j++){
            string += keyboardKeys[i][j]+"&nbsp; &nbsp; &nbsp;";
          }
          $(".text", this).html(string).css("width","55px").css("margin-left","2px").css("margin-top","23px");
        }
        else{
          for(var j=0;j<keyboardKeys[i].length;j++){
            string += keyboardKeys[i][j]+"<br>";
          }
          $(".text", this).html(string);
        }
      }
      else{
        $(".text", this).html(keyboardKeys[i][0]).css("margin-top","13px");
      }
      if(i==55 || i==56){
        $(".text", this).html(keyboardKeys[i][0]).css("margin-top","23px").css("margin-left","-8px");
      }
      if(i==57||i==61){
        $(".text", this).html($(".text", this).html()).css("margin-top","-2px").css("margin-left","-8px").css("line-height","22px");
      }
      if(i==61){
        $(".text", this).css("margin-left","9px");
      }
      if(i > 61){
        $(".text", this).css("margin-top","3px");
      }
    }
  });

  $(".switch").click(function(){
     $(this).toggleClass("on");
     $("body").toggleClass("light");
  });

  document.addEventListener("keypress",function(e){
    if(e.keyCode == 60 || e.keyCode == 44 || e.keyCode == 45 || e.keyCode == 223 || e.keyCode == 63 || e.keyCode == 43){
      keyDownAni(keyboardMap[e.keyCode],e);
    }
    if(!$("input").is(":focus")){
      e.preventDefault();
    }
  });

  document.addEventListener("keydown",function(e){
    if(e.keyCode == 8 || e.keyCode == 9){
      if(!$("input").is(":focus")){
        e.preventDefault();
      }
    }
    setTimeout(function(){
      if(e.shiftKey && e.keyCode == 16){
      var loc = e.location;
      if(loc == 1){
        //left
        keyDownAni(42,e);
      }
      else if(loc == 2){
        //right
        keyDownAni(54,e);
      }
    }
    else if(e.altKey && e.keyCode == 18){
      if(e.location == 1){
        //left
        keyDownAni(57,e);
      }
      else if(e.location == 2){
        //left
        keyDownAni(61,e);
      }
    }
    else if(e.keyCode == 187 || e.keyCode == 188 || e.keyCode == 189 || e.keycode == 191){

    }
    else{
      keyDownAni(keyboardMap[e.keyCode],e);
    }
    },10);
  });
});

function keyDownAni(eq,e){
  var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  var uid = randLetter + Date.now();
  var sk = isCapslock(e);
  if(sk){
    $(".wrapper ul li").eq(eq).children(".text").toggleClass("active");
  }
  else{
    $(".wrapper ul li").eq(eq).children(".text").toggleClass("active");
  }
  $(".wrapper ul li").eq(eq).addClass("activeKey");
  $(".wrapper ul li").eq(eq).attr("id",uid);
  $("#"+uid+" .finger").animate({
    opacity: 1,
    width: "30px",
    height: "30px",
    top: "0px",
    left: "0px"
  },300, function(){
    $("#"+uid+" .finger").animate({
      opacity: 0,
      width: "40px",
      height: "40px",
      top: "-5px",
      left: "-5px"
    },300,function(){
      $("#"+uid+" .finger").eq(eq).removeClass("activeKey");
    });
  });
}

function isCapslock(e){
    e = (e) ? e : window.event;
    var charCode = false;
    if (e.which) {
        charCode = e.which;
    } else if (e.keyCode) {
        charCode = e.keyCode;
    }
    var shifton = false;
    if (e.shiftKey) {
        shifton = e.shiftKey;
    } else if (e.modifiers) {
        shifton = !!(e.modifiers & 4);
    }
    if (charCode >= 97 && charCode <= 122 && shifton) {
        return true;
    }
    if (charCode >= 65 && charCode <= 90 && !shifton) {
        return true;
    }
    return false;
}