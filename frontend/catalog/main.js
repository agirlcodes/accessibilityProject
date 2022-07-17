$(document).ready(function(){
    const db_url = 'http://localhost:3000'
    $.getJSON(`${db_url}/getData`, function(data){
        // console.log(data)
        console.log(data.category)
        $.each(data, function(index, value){
          let id = value._id
          let category =  value.category
          let productImg = value.product[0].img
            $('#catalog').append(`
            <figure class="data">
                <a id=${category} href="" alt="contains Image of product"><img src=${productImg} alt="image of products available"></a>
                <figcaption>
                    <h2>
                    <a href="" alt="contains Name of product">${category}</a></h2>
                </figcaption>
            </figure>`)
            // ALL CONTENT
          })
        })
    $("#Fig Yarrow").click(function(e){
      e.preventDefault()
      alert("I am active")
      console,log("I am active")
    })
    
    



  //MODALS
  $(".open").click(function(){
    $(".popup, .popup-content").addClass("active");
    let dataSelected = $("#topData").val()
    console.log(dataSelected)
    $(".popup-content").append(dataSelected)
    console.log("hello?")
  });
  $(".close, .popup").click(function(){
    $(".popup, .popup-content").removeClass("active");
  });

})