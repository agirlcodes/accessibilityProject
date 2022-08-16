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
      $ ('footer a, footer p, footer h3').css({'color': 'white'});
      $ ('h1').css({'color': 'white'});
      $ ('.categoryLayout h2').css({'background-color': 'black'});
    });
    $('#coloredBackground').click(function(){
      $('img').css('filter', 'grayscale(0)');
      $('#landingImg').css('filter', 'grayscale(0)');
      $ ('footer').css('background-color', '#205e69');
      $ ('footer a').css('color', 'white');
      $ ('.categoryLayout h2').css({'background-color': '#205e69b4'});
    // $ ('footer a').css('color', 'white');
  });
  let screenSize = document.documentElement.clientWidth || window.innerWidth; 
  $('#fingerspell').click(function(){
    if (screenSize >= 700){
      $(".data").css({"font-family":"Gallaudet", "font-size": "50px","font-weight": "normal", "letter-spacing": "10px"});
      $(".data p").css({"font-family":"Gallaudet", "font-size": "2em","font-weight": "normal", "letter-spacing": "10px"});
      $("h1").css({"font-family":"Gallaudet", "font-size": "90px", "color":"black","top": "25%", "margin-right":"0%"});
      $("a").css({"font-family":"Gallaudet","text-align": "center", "font-size":"45px"});
      $("body").css({"width":"100%"});
      $ ('footer').css({'flex-direction': 'row', 'font-size':'1em'});
    }else{
      $(".data").css({"font-family":"Gallaudet", "font-size": "30px","font-weight": "normal", "letter-spacing": "10px"});
      $(".data p").css({"font-family":"Gallaudet", "font-size": "1.7em","font-weight": "normal", "letter-spacing": "10px"});
      $("a").css({"font-family":"Gallaudet","text-align": "center", "font-size":"1.1em"})
      $("h1").css({"font-family":"Gallaudet", "font-size": "3.1em", "color":"black","top": "25%", "margin-right":"0%", "background-color": "white"});
      $ ('footer a, footer p, footer h3').css({'font-size': '1em'});
    }
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
<a href="catalog.html#topSellerNav" alt="contains product image">
  <figure>
    <img src=${value.img} alt="image of products available">
    <figcaption>
      <h3 class="data">${value.name}</h3>
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
              <button aria-label="add ${dataValue.name} to cart Button" class="addCart productVal data">Add To Cart</button>
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