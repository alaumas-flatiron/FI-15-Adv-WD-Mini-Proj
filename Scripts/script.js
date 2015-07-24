$(document).ready(function() {

var board= [0,1,2,3,4,5,6,
            7,8,9,10,11,12,
            13,14,15,16,17,18,
            19,20,21,22,23,24,
            25,26,27,28,29,30,
            31,32,33,34,35,36,
            37,38,39,40,41];

$('.space').click(function() {
  $(this).css("background", "red");
  var place = $(this).html();
  console.log(place);
  
  if (place < 7) {
    board[0].splice(place, 1, 'player1');
  } else if (place < 14) {
    board[1].splice((place - 7), 1, 'player1');
  } 
  
//   board[0].splice(place, [0][0], 'player1');
  console.log(board);
  
               
 });
 });                  