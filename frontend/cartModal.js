$('#cart').simpleCart();
$("#cart").css("display", "none");
$('#cartModal').click(function(event){
  event.preventDefault();
  console.log("im on catalog?")
  $('#cart').toggle()
  
})
$('#closeModal').click(function(event){
  event.preventDefault();
  $('#cart').css("display: none")
  console.log("close it damnnit")
})