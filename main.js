$(document).ready(function(){
    // dropdown font
    $(".increaseFont").click(function(){
    var type= $(this).val();
    console.log(type)
    $('.data').css('font-size', type);
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
    // FingerSpell
    $(function() {  
      $('#fingerspell').click(function(){
          $('.data').css('font-family', 'Gallaudet');
          $('.data').css('font-size', '50px');
          $('.data').css('font-weight', 'normal');
        });
      });
      

// Select sections to increase size and decrease
  //DATA
  $.getJSON('../backend/data.json', function(data){
    let TopSellers = data.TopSellers;
    // console.log(TopSellers)
    $.each(TopSellers, function(index, value){
      // console.log(index, value)
      // console.log(value.name)
      $('#topSellers').append(`
      <figure class="data">
        <a href="" alt="contains Image of product"><img src=${value.img} alt="image of products available"></a>
        <figcaption>
        <ul>
        <li><h2><a href="" alt="contains Name of product"></h2>${value.name}</a></li>
        <li>£ ${value.price}</li></ul>
        </figcaption>
      </figure>`)
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
              <figcaption>${dataValue.category}</figcaption>`)
              console.log(dataValue.category)
            }else(console.log("no work"))
        }
      });
      console.log(input)
      e.preventDefault();
    })
  })
  

});