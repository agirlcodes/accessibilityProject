$(document).ready(function(){
    // Alter Font-Size - NEED TO SET LIMITS ON FONT-SIZE
    $(".increaseFont,.decreaseFont").click(function(){
    var type=  $(this).val();
    var curFontSize = $('.data').css('font-size');
     if(type=='increase'){
      $('.data').css('font-size', parseInt(curFontSize)+1);
      }
     else{
      $('.data').css('font-size', parseInt(curFontSize)-1);
     }  
       });
    // Background-color and font-color change
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
    // FingerSpell Language
    $(function() {  
      $('#fingerspell').click(function(){
          $('.data').css('font-family', 'ZoeGermany');
          $('.data').css('font-size', '40px');
        });
      });
      

// Select sections to increase size and decrease
  //DATA
  $.getJSON('../backend/data.json', function(data){
    let TopSellers = data.TopSellers;
    $.each(TopSellers, function(index, value){
      // console.log(index, value)
      console.log(value.name)
      $('#topSellers').append(`<figure><a href="" alt="contains Image of product"><img src=${value.img} alt="image of products available"></a></img><figcaption><ul><li><h2><a href="" alt="contains Name of product"></h2>${value.name}</a></li><li>£ ${value.price}</li></ul></figcaption></figure>`)
    })
  })


// MODALS










});