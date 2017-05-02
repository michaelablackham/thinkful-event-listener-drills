//click function that add and removes .bulb-on

var $bulbs = $('.js-lightbulb');

console.log('total bulbs:', $bulbs.length);

$bulbs.click(function(){
  $bulbs.removeClass('bulb-on');
  $(this).addClass('bulb-on');
});
