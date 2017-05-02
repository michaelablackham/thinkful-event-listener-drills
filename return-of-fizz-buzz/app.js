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
  for (i=1; i<=input; i++) {
    counter.push(fizzBuzzVal(fizzBuzzVal(i)));
  }
  return counter;
}

//wrap each one of the items from the array within a span tag
function doFizzBuzz(num) {
  var fizzBuzzArray = makeArray(num);
  fizzBuzzArray.forEach(function(item) {
    //create a basic element with the normal fixx-buzz-item class from the stylesheet
      var newElem = $(
        '<div class="fizz-buzz-item"><span>' + item + '</span></div>');
      //add the class that is relevant to the string value if % by 3, 5, or 15
      if (item === fizz || item === buzz || item === fizzBuzz) {
        newElem.addClass(item);
      }
      //appeand this new element to js results container
      $(".js-results").append(newElem);
  })
}

//create a function when the user hits the "submit" button
function handleFormSubmit() {
  $('#number-chooser').submit(function(event) {
    event.preventDefault();
    $(".js-results").empty();
    var choice = parseInt( $(event.currentTarget).find(
      'input[name="number-choice"]').val());
    doFizzBuzz(choice);
  });
}

//run the final command
$(function() {
  handleFormSubmit();
});
