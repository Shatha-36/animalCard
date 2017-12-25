//----------(1)--------------------
//1- add input box next to animals name that changes the animal name based on whats typed in the box
$('#input1').change(function() {
  var text;
  text= $(this).val();
  $('#title').text(text);
});
//----------(2)---------------
//2- clicking the current image replaces it with another image which has same class and properties applied to it using jquery, and under the image there is a button that toggles between showing the image and hiding it
$('img').click(function() {
  $(this).attr('src', 'img/cheetah2.jpg');
});

$('#btn1').click(function() {
  $('img').toggle();
});

//----------(3)-***--------------
//3-add a span element at the end of the paragraph that has the animal name in bold and capital letters
$(document).ready(function() {
var str= '- <span><strong>%data%</strong></span>';
var title= str.replace('%data%', $('#title').text().toUpperCase());
$('.fact').append(title);
//update the counter
$(document).ready(updateCounter());
//add the new animals list
function addAnimals() {
  var ul= '<ul class="newAnimals"></ul>';
  var li= '<li>%data%</li>';
  var div= $('.card');
  div.append(ul);
  for (i=0; i<animals.length; i++) {
    var a= li.replace('%data%', "- Name:" + animals[i].name + " - " + "Age:" + animals[i].age + " - " + "Type:" + animals[i].type);
    $('.newAnimals').append(a);
  }
}
});
//-----------(4)-----------
//4-add an input box above the list and 2 buttons next to it, one button to add whats typed in the input box to the beginning of the list and another to add it at the end, if list item is clicked its text is displayed in an alert box and a counter below the list that shows how many list items are there, and a button next to the counter that when clicked deletes the last list item in the list
$('#btn2').click(function() {
  var newListItem= '<li>%data%</li>';
  var newItem= newListItem.replace('%data%', $('#input2').val());
  $('#main-list').prepend(newItem);
  updateCounter();
});

$('#btn3').click(function() {
  var newListItem= '<li>%data%</li>';
  var newItem= newListItem.replace('%data%', $('#input2').val());
  $('#main-list').append(newItem);
  updateCounter();
});

$('#main-list').on('click', 'li', function(evt) {
  alert("you have clicked: " + $(this).text());

});
//function to update the counter

function updateCounter() {
  $('#counter').text($('#main-list').children().length);
}
//delete the last item
$('#btn4').click(function() {
  $('#main-list').children().last().remove();
  updateCounter();
});

//---------(5)------------
//5-add a button that when clicked changes all the borders colors to red or green if the borders were already red
$('#btn5').click(function() {
  $('*').css('border-color', 'red');
});

//---------(6)------------
//6-add another list after the existing one that includes 3 similar animals and a span element that has the animals type in bold and when the span is clicked the text color of the animal name changes to another color
$('#type').click(function() {
  $('#similar-animals').children().css('color', 'red');
});


//---------(7)------------
//7- create a javascript array of objects which is a list of 3 more animals,each animal with an age, name, and type, then append that list to the end of the document using javascript and jquery

var animals= [
  {name: 'Cat', age: '3', type: 'Mammals'},
  {name: 'Rabbit', age: '2', type: 'Mammals'},
  {name: 'frog', age: '10', type: 'Amphibious'}];
