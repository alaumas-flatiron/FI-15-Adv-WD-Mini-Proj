$(document).ready(function() {

var board= [ 
         [0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0] ,
         [0,0,0,0,0,0,0] ,
         [0,0,0,0,0,0,0] ,
         [0,0,0,0,0,0,0] ,
         [0,0,0,0,0,0,0] 
]

$('.space').click(function() {
  $(this).css("background", "red");
  var place = $(this).html();
  console.log(place);
  
  
  
               
 });
 });                  