$(document).ready(function(){
  const db_url = 'http://localhost:3000'
  // Alter Font-Size - NEED TO SET LIMITS ON FONT-SIZE
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
    $('#coloredBackground').click(function(){
        $('body').css('background-color', 'white');
        $('.data').css('color', 'black');
      });
    $('#monochromeBackground').click(function(){
        $('body').css('background-color', '#73A1B9');
        $('.data').css('color', '#222A2E');
      });
    $('#fingerspell').click(function(){
        $('.data').css('font-family', 'Gallaudet');
        $('.data').css('font-size', '50px');
        $('.data').css('font-weight', 'normal');
        $('.data').css('letter-spacing', '10px');
      });
         
   $.getJSON(`${db_url}/getData`, function(data){
    //TOP SELLERS Home page
    let TopSellers = data[0].product;
    $.each(TopSellers, function(index, value){
      $('#topSellersContent').append(`
      <figure class="data">
      <a href="" alt="contains Image of product"><img src=${value.img} alt="image of products available"></a>
      <figcaption>
      <ul>
      <li><h2><a href="" alt="contains Name of product"></h2>${value.name}</a></li>
      <li data-price="${value.price}">£ ${value.price}</li></ul>
      </figcaption>
      <button class="sc-add-to-cart" data-name="${value.name}" data-price="${value.price}" type="submit">ADD To Cart</button>
      </figure>
      `)
    })
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
  })
});