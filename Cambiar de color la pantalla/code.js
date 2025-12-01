onEvent("button1", "click", function( ) {
  timedLoop(100, function() {
    setProperty("screen1", "background-color", rgb(randomNumber(0, 225),randomNumber(0, 225),randomNumber(0, 225),0.5));
  });
});
onEvent("music", "click", function( ) {
  playSound("assets/DOBLE-VVASO.mp3", false);
});
onEvent("text_input1", "input", function( ) {
  setProperty("screen1", "image", "https://s.abcnews.com/images/US/george-floyd-ap-jt-200529_hpMain_2_16x9_992.jpg");
});
