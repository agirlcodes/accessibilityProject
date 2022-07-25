// const e = require("cors")

$(document).ready(function(){
    const db_url = 'http://localhost:3000'
    $.getJSON(`${db_url}/getData`, function(data){
        // console.log(data)
        let topSellers = data[0]
        let topPro = topSellers.product
        console.log(topPro)
        let goestperf = data[1]
        let goestPro = goestperf.product
        let figYarrow = data[2]
        let figPro = figYarrow.product
        let botanical = data[3]
        let boPro = botanical.product
        console.log(topSellers)
        $('#catalog').append(`
        <figure id="topSeller" class="data" >
            <a id=${topPro[0]._id} href="" alt="contains Image of product"><img src=${topPro[0].img} alt="image of products available"></a>
            <figcaption>
                <h2>
                <a href="" alt="contains Name of product">${topSellers.category}</a></h2>
            </figcaption>
        </figure>
        <figure id="goest" class="data" >
            <a id=${goestPro[0]._id} href="" alt="contains Image of product"><img src=${goestPro[0].img} alt="image of products available"></a>
            <figcaption>
                <h2>
                <a href="" alt="contains Name of product">${goestperf.category}</a></h2>
            </figcaption>
        </figure>
        <figure id="figYarrow" class="data" >
            <a id=${figPro[0]._id} href="" alt="contains Image of product"><img src=${figPro[0].img} alt="image of products available"></a>
            <figcaption>
                <h2>
                <a href="" alt="contains Name of product">${figYarrow.category}</a></h2>
            </figcaption>
        </figure>
        <figure id="botanical" class="data" >
            <a id=${boPro[0]._id} href="" alt="contains Image of product"><img src=${boPro[0].img} alt="image of products available"></a>
            <figcaption>
                <h2>
                <a href="" alt="contains Name of product">${botanical.category}</a></h2>
            </figcaption>
        </figure>`)

        $("#topSeller").click(function(e){
          e.preventDefault()
          $(".popup, .popup-content").addClass("active");
          // console.log(dataSelected)
          $(".popup-content").append(`
          <h1>${botanical.category}</h1>
          `)
          console.log("hello?")
        });
        $("#goest").click(function(e){
          e.preventDefault()
          $(".popup, .popup-content").addClass("active");
          // let dataSelected = $("#topData").val()
          // console.log(dataSelected)
          $(".popup-content").append(`
          <h1>${figYarrow.category}</h1>`)
          console.log("hello?")
        });
        $("#figYarrow").click(function(e){
          e.preventDefault()
          $(".popup, .popup-content").addClass("active");
          // console.log(dataSelected)
          // $(".popup-content").append(dataSelected)
          console.log("hello?")
        });
        $("#botanical").click(function(e){
          e.preventDefault()
          $(".popup, .popup-content").addClass("active");
        });


        $(".close, .popup").click(function(){
          $(".popup, .popup-content").removeClass("active");
        });


     

    })

})