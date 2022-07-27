// const e = require("cors");

$(document).ready(function(){
  const db_url = 'http://localhost:3000'
  // Alter Font-Size - NEED TO SET LIMITS ON FONT-SIZE
  $(".increaseFont,.decreaseFont").click(function(){
  var type=  $(this).val();
  var curFontSize = $('.data').css('font-size');
    if(type=='increase'){
    $('.data').css('font-size', parseInt(curFontSize)+7);
    }else{
    $('.data').css('font-size', parseInt(curFontSize)-7);
    }  
    });
  $(function() {  
    $('#highRatio').click(function(){
        $('body').css('background-color', 'white');
        $('.data').css('color', 'black');
      });
    });
  $(function() {  
    $('#mediumRatio').click(function(){
        $('body').css('background-color', '#73A1B9');
        $('.data').css('color', '#222A2E');
      });
    });
  $(function() {  
    $('#lowRatio').click(function(){
        $('body').css('background-color', '#045884');
        $('.data').css('color', '#E5C54A');
      });
    });
  // FingerSpell
  $(function() {  
    $('#fingerspell').click(function(){
        $('.data').css('font-family', 'Gallaudet');
        $('.data').css('font-size', '50px');
        $('.data').css('font-weight', 'normal');
        $('.data').css('letter-spacing', '10px');
      });
    });
      
    
    // Select sections to increase size and decrease
    $.getJSON(`${db_url}/getData`, function(data){
      // console.log([data[0].category])
      //TOP SELLERS Home page
      let TopSellers = data[0].product;
    $.each(TopSellers, function(index, value){
      // console.log(value)
      $('#topSellers').append(`
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
    
    
    // SEARCHBAR
    $('#searchBar').keyup(function(e){
      let input = $('#searchBar').val()
      input = input.toLowerCase();
      $.each(data, function(index, value){
        for(var key in value) {
          let dataValue = value[key]
          if (dataValue.name.toLowerCase().indexOf(input)!= -1) {
            $('.searchBarResults').html(`
            <figure class="data">
            <img src="${dataValue.img} alt="image of products available>
            </figure>
            <figcaption>${dataValue.name}</figcaption>
            <figcaption>£${dataValue.price}</figcaption>
            <figcaption>${dataValue.category}</figcaption>
            `)
            console.log(dataValue.category)
          }
        }
      });
      console.log(input)
      e.preventDefault();
    })
    $('#cart').simpleCart();
    // $('#cart').hide()
    $('.cartBtn').click(function(e){
      console.log("open")
      e.preventDefault()
      $('#cart').show()
    })
    $('.close').click(function(e){
      e.preventDefault();
      console.log("close")
      $('#cart').hide()
    })
  })
  
  // // CART FUNCTION
  // $('#cartBtn').click(function(){
  //   window.open('/cart/cart.html')
  //   console.log("I AM THE CART FUNCTION")
  // })
  
})