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
      $('.searchBarImg').css('filter', 'grayscale(1)');
      $('#landingImg').css('filter', 'grayscale(1)');
      $ ('footer').css({'background-color': '#464646', 'color': 'white'});
      $ ('footer a').css({'color': 'white'});
      $ ('h1').css({'color': 'white'});
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
    $("h1").css({"font-size": "90px", "color":"black","top": "25%"});
    $("a").css({"text-align": "center"});
  });
  $('#resetBtn').click(function() {
    // alert('Reset')
    location.reload();
  })
  
$.getJSON(`${db_url}`, function(data){
//TOP SELLERS Home page
let TopSellers = data[0].product;
let Goest = data[1].product;
let Yarrow = data[2].product;
let Botanical = data[3].product;
$.each(TopSellers, function(index, value){
$('#topSellersContent').append(`
<a href="catalog.html" alt="contains product image">
  <figure>
    <img src=${value.img} alt="image of products available">
    <figcaption>
      <h2 class="data">${value.name}</h2>
    </figcaption>
  </figure>
</a>
`)
})
// SEARCHBAR
// TRY ADD CATEGORY TO DETAILS
// ADD A WAY TO CLOSE POP-UP?
let compData = [Goest,TopSellers, Yarrow, Botanical]
  $('#searchBar').keyup(function(e){
    e.preventDefault();
    let input = $('#searchBar').val()
    input = input.toString().toLowerCase();
    $.each(compData, function(index, value){
      for(var key in value) {
        let dataValue = value[key]
          if (dataValue.name.toLowerCase().indexOf(input)!= -1) {
            $('.searchBarResults').css({'display':'block'})
            $('.searchBarResults').html(`
            <figure class="data">
              <aside>
                <img class="searchBarImg" src="${dataValue.img} alt="image of products available>
              </aside>
              <figcaption class="data">
              <h3>${dataValue.name}</h3>
              <p class="data">£${dataValue.price}
              </p>
              <button id="addCart" class="productVal">Add To Cart</button>
              </figcaption>
            </figure>
            `)
          //   $(document).on('click', 'button[id^="addCart"]', function() {
          //     console.log(dataValue.name.toLowerCase())
          // });
          }
      }
    });
    if (input === '') {
      $('.searchBarResults').css({'display':'none'})
    }
  })
})
})