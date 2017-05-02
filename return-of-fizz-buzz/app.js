// fizz = % 3
// buzz = % 5
// fizzbuzz = %3&5

//create variables with the right text
var fizz = "fizz";
var buzz = "fizz";
var fizzBuzz = "fizzbuzz";

//create a function that gives the sting value to the right input
function fizzBuzzVal(input) {
  var value = input;
  if ( input % 15 === 0) {
    value = fizzBuzz;
  } else if ( input % 5 === 0) {
    value = buzz;
  } else if ( input % 3 === 0) {
    value = fizz;
  }
  return value;
}

//create an array of numbers from 1 => innput value
function makeArray(input) {
  var counter = [];
  for (i=0; i<input; i++) {
    counter.push(fizzBuzzVal(fizzBuzzVal(i)));
  }
  return counter;
}

function doFizzBuzz(num) {
  var fizzBuzzArray = makeArray(num);
  fizzBuzzArray.forEach(function(item) {
      var newElem = $(
        '<div class="fizz-buzz-item"><span>' + item + '</span></div>');
      if (item === fizz || item === buzz || item === fizzBuzz) {
        newElem.addClass(item);
      }
      $(".js-results").append(newElem);
  })
}

function handleFormSubmit() {
  $('#number-chooser').submit(function(event) {
    event.preventDefault();
    // in case there's already results
    $(".js-results").empty();
    var choice = parseInt( $(event.currentTarget).find(
      'input[name="number-choice"]').val());
    doFizzBuzz(choice);
  });
}

$(function() {
  handleFormSubmit();
});
