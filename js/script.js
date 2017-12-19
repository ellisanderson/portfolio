// MAIN NAVIGATION MODAL WINDOW
$(document).ready(function(){
  $('.trigger, .ham-trigger').click(function(){
    $('.nav-background').slideToggle(); //opens up nav modal
  });

  $('.nav-close, .main-nav li a').click(function(){
    $('.nav-background').slideToggle();
  });

  $('.main-nav li a').click(function(){
    $('body').removeClass('scroll-disable');
  });
});


//Append underline on menu trigger
$(document).ready(function(){
  $('.trigger').append('<div class="underline"></div>');
});



//Retrieve Welcome Screen's links and place all individual letters from the links into an array
$(document).ready(function(){
  var backgroundContainer = '<div class="backgroundContainer"></div>';
  $('#welcome').append(backgroundContainer);

  var string = $('#welcome a').clone().text();

  var text = document.querySelector(".backgroundContainer");
  string.split("");

  var letterArray = [];

  for (var i = 0; i < string.length; i++) {
    text.innerHTML += "<div class='letter'>" + string[i] + "</div>";
    letterArray.push(string[i]);
  }

  //Randomize Background Letters
  function randomLetters(){
    $('.letter').each(function(){
      var width = $('.backgroundContainer').width();
      var height = $('.backgroundContainer').height();
      var xpos = ((width / 100) * (Math.random() * 100)).toFixed();
      var ypos = ((height / 100) * (Math.random() * 100)).toFixed();
      var randomRem = (Math.random() * 5).toFixed() + 'rem';
      var randomRot = 'rotate(' + (Math.random() * 360).toFixed() + 'deg)';
      var fontFamilyArray = ['monospace','sans-serif','serif'];
      var randomFontFamily = fontFamilyArray[Math.floor(Math.random()*fontFamilyArray.length)];
      var fontWeightArray = [100,300,400,600,800,900];
      var randomFontWeight = fontWeightArray[Math.floor(Math.random()*fontWeightArray.length)];
      var colorArray = ['white','pink','brown','gold','lightblue','orange'];
      var randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];

      $(this).css({
        'top' : ypos + 'px',
        'left' : xpos + 'px',
        'font-size' : randomRem,
        'transform' : randomRot,
        'color' : randomColor,
        // 'font-family' : randomFontFamily,
        // 'font-weight' : randomFontWeight,
      });
    });
  };

  window.onload = randomLetters();

  var resizeId;
  $(window).resize(function() {
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 500);
  });

  function doneResizing(){
    randomLetters();
  };

});
