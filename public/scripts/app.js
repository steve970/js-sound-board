$(document).ready(function() {

  var imgs = $('.pic'),
    playState = ['animation-play-state', '-moz-animation-play-state', '-webkit-animation-play-state'];

    imgs.click(function() {
    imgs.css(playState, function(i, v) {
      return v === 'paused' ? 'running' : 'paused';
    });
    $('body').toggleClass('paused', $(this).css(playState) === 'paused');
  });

  $(".record").on("click", function () {
    var animate = $('.rotate').css(playState);
    console.log(animate);
    $.each(animate, function(prop, value) {
      
    })
  })

  // $(".record").on("click", function() {
  //   $(this).toggleClass('rotate');
  //   if ($(this).hasClass('rotate')) {
  //     // playTrack($('#didgi3').get(0));
  //     $('#stopwatch').timer('resume');
  //     // layerTracks();
  //     // playSymphony();
  //   }
  //   else {
  //     $('#stopwatch').timer('pause');
  //     stopTracks($('audio'));
  //   }
  // })

  $(document).on('keydown', function (event) {
    if (event.which === 65) { // keyboard a
      playTrack($('#highhat').get(0));
    } else if (event.which === 83) { // keyboard s
      playTrack($('#bass').get(0));
    } else if (event.which === 68) { // keyboard d
      $('.record').css("background", "url(img/arnold.jpeg)")
      playTrack($('#live').get(0));
    } else if (event.which === 70) { // keyboard f
      playTrack($('#trumpet').get(0));
    } else if (event.which === 71) { // keyboard g
      playTrack($('#banjo').get(0));
    } else if (event.which === 74 ) { // keyboard j
      playTrack($('#dubstep').get(0));
      $('body').css("background", "url(img/background.gif)")
    } else if (event.which === 72) { // keyboard h
      playTrack($('#scratch').get(0));
    } else if (event.which === 75) { // keyboard k
      playTrack($('#flutes').get(0));
    } else if (event.which === 76) { // keyboard l
      playTrack($('#dubsteploop').get(0));
    } else if (event.which === 90) { // keyboard z
      $('.record').css("background", "url(img/arnold.jpeg)")
      playTrack($('#baby').get(0));
    } else if (event.which === 88) { // keyboard x
      playTrack($('#weapon').get(0));
    } else if (event.which === 67) { // keyboard c
      $('.record').css("background", "url(img/russell.jpeg)")
      playTrack($('#entertain').get(0));
    } else if (event.which === 86) { // keyboard v
      $('.record').css("background", "url(img/batman.jpeg)")
      playTrack($('#batman').get(0));
    }
    else if (event.which === 66) { // keyboard b
     $('.record').css("background", "url(img/jeff.jpeg)")
     playTrack($('#jeff').get(0));
   }
  })

  $(document).on('keyup', function (event) {
    if (event.which === 65) { // keyboard a
      stopTrack($('#highhat').get(0));
    } else if (event.which === 83) { // keyboard s
      stopTrack($('#bass').get(0));
    } else if (event.which === 68) { // keyboard d
      $('.record').css("background", "url(http://i.imgur.com/FKRMMap.gif) center center");
      $('.record').css("background-size", "cover");
      stopTrack($('#live').get(0));
    } else if (event.which === 70) { // keyboard f
      stopTrack($('#trumpet').get(0));
    } else if (event.which === 71) { // keyboard g
      stopTrack($('#banjo').get(0));
    } else if (event.which === 74) { // keyboard j
      stopTrack($('#dubstep').get(0));
      $('body').css("background", "#eaeaea")
    } else if (event.which === 72) { // keyboard h
      stopTrack($('#scratch').get(0));
    } else if (event.which === 75) { // keyboard k
      stopTrack($('#flutes').get(0));
    } else if (event.which === 76) { // keyboard l
      stopTrack($('#dubsteploop').get(0));
    } else if (event.which === 67) { // keyboard c
      $('.record').css("background", "url(http://i.imgur.com/FKRMMap.gif) center center");
      $('.record').css("background-size", "cover");
      stopTrack($('#entertain').get(0));
    } else if (event.which === 86) { // keyboard v
      $('.record').css("background", "url(http://i.imgur.com/FKRMMap.gif) center center");
      $('.record').css("background-size", "cover");
      stopTrack($('#batman').get(0));
    } else if (event.which === 66) { // keyboard b
      $('.record').css("background", "url(http://i.imgur.com/FKRMMap.gif) center center");
      $('.record').css("background-size", "cover");
      stopTrack($('#jeff').get(0));
    } else if (event.which === 90) { // keyboard z
      $('.record').css("background", "url(http://i.imgur.com/FKRMMap.gif) center center");
      $('.record').css("background-size", "cover");
      playTrack($('#baby').get(0));
    }
  })

  // $(".record").dblclick(function () {
  //   $(this).toggleClass('rotate');
  //   playTrack($('#scratching').get(0));
  // })

})

function playTrack (audioElem) {
  audioElem.play();
}

function stopTrack (audioElem) {
  audioElem.pause();
  audioElem.currentTime= 0;
}

function stopTracks (audioElem) {
  audioElem.each(function () {
    $(this).get(0).pause();
    $(this).get(0).currentTime = 0;
  })
}
