

$('#button-1').hide();
var maxValue = 100;
var hiddenValue = Math.floor((Math.random() * maxValue) + 1);

function isValid(userInput) {
  if (isNaN(userInput))
    return false;
  else if (userInput < 1)
    return false;
  else if (userInput > maxValue)
    return false;
  return true;
}

$('.alert-box').text("Guess a number between 0 and " + maxValue + '.');

$('form').on('submit', function(event) {
  event.preventDefault();

  var userGuess = parseInt($('#an-input').val(), 10);
  if (!isValid(userGuess))
    $('.alert-box').text("Invalid input, must enter a number between 0 and " + maxValue + '.')
  else if (userGuess > hiddenValue)
    $('.alert-box').text(userGuess + " is too high.  Guess again!");
  else if (userGuess < hiddenValue)
    $('.alert-box').text(userGuess + " is too low.  Guess again!");
  else {
    $('.alert-box').text(userGuess + " is the correct answer!  Great job!");
    $('#button-1').show();
  }
});

$("#button-1").on('click', function(event){
  $('#button-1').hide();
  hiddenValue = Math.floor((Math.random() * maxValue) + 1);
  $('.alert-box').text("Guess a number between 0 and " + maxValue);
});




