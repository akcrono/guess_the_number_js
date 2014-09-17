$("#button-1").on('click', function(event){
  alert('hello');
});

$('#button-2').on('click', function() {
  $('.alert-box').toggle();
});


$('form').on('submit', function(event) {
  event.preventDefault();

  debugger;

  var firstInput = $('#an-input').val();
  var secondInput = $('#another-input').val();

  alert('You typed in ' + firstInput + ' and ' + secondInput);
});

