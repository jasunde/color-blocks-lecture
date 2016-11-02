$(document).ready(function () {
  var $blockContainer = $('#block-container'),
      colors = [
        "red",
        "yellow",
        "green",
        "blue"
      ],
      currentColor = '';

  for (var i = 0; i < colors.length; i++) {
    var $block = $('<div class="color-block"></div>')
      .css('background-color', colors[i])
      .addClass(colors[i]);

    $blockContainer.append($block);
  }

  pickColor();

  $blockContainer.on('click', '.color-block', function () {
    if($(this).hasClass(currentColor)) {
      console.log('got it!');
    } else {
      console.log('nope!')
    }
  });

  function setPrompt() {
    $('#prompt').text('Please click the ' + currentColor + ' box!');
  }

  function pickColor() {
    currentColor = colors[randomNumber(0, colors.length - 1)];
    setPrompt();
  }

});

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}
