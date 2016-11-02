$(document).ready(function () {
  $blockContainer = $('#block-container');

  for (var i = 0; i < 4; i++) {
    $blockContainer.append('<div class="color-block"></div>');
  }
});

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}
