$(document).ready(function(){
  const db_url = 'https://accessibilityproject.herokuapp.com/getData'
  $(".increaseFont,.decreaseFont").click(function(){
  var type=  $(this).val();
  var curFontSize = $('.data').css('font-size');
  console.log(type);
  console.log(curFontSize);
    if(type=='increase'){
    $('.data').css('font-size', parseInt(curFontSize)+6);
    if(curFontSize == "34px"){
      $('.data').css('font-size', parseInt(curFontSize)+0);
    }
  }else{
    $('.data').css('font-size', parseInt(curFontSize)-6);
    if(curFontSize == "10px"){
      $('.data').css('font-size', parseInt(curFontSize)-0);
    }
    }  
    });
  $('#monochromeBackground').click(function(){
      $('.data').css('color', 'black');
      $('a').css('color', 'black');
      $('img').css('filter', 'grayscale(1)');
      $('#landingImg').css('filter', 'grayscale(1)');
      $ ('footer').css('background-color', 'gray');
  });
  $('#coloredBackground').click(function(){
    $('img').css('filter', 'grayscale(0)');
    $('#landingImg').css('filter', 'grayscale(0)');
    $ ('footer').css('background-color', '#205e69');
    $ ('footer a').css('color', 'white');
    // $ ('footer a').css('color', 'white');
  });
  $('#fingerspell').click(function(){
    $(".data, a, h1, h2, h3").css({"font-family":"Gallaudet", "font-size": "50px","font-weight": "normal", "letter-spacing": "10px"});
    $("h1, h2, h3").css({"font-size": "70px"});
    $("a").css({"text-align": "center"});
  });
  
$.getJSON(`${db_url}`, function(data){
console.log(data)
//TOP SELLERS Home page
let TopSellers = data[0].product;
$.each(TopSellers, function(index, value){
$('#topSellersContent').append(`
<a href="catalog/subpages/topSellers.html" alt="contains product image">
  <figure>
    <img src=${value.img} alt="image of products available">
    <figcaption>
      <h2>${value.name}<h2>
    </figcaption>
  </figure>
</a>
`)
})
})
  // // SEARCHBAR
  // $.getJSON(`${db_url}/getData`, function(data){
  //   $.each(data, function(index, value){
  //     console.log(value.product);
  //     $('#searchResult').addEventListener('input', event => {
  //       event.preventDefault()
  //       const term = event.target.value.toLowerCase()
  //       let searchResult = filteredMountains.filter(filteredMountain => {
  //       return filteredMountain.name.toLowerCase().includes(term)
        
  //       })
  //     createMountainCards(searchResult)
  //     })
  //   })
  // })
});