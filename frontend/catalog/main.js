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
        <figcaption>
            <h2>
            <a href="subpages/topSellers.html" alt="contains Name of product">${topSellers.category}</a></h2>
        </figcaption>
            <a id=${topPro[0]._id} href="subpages/topSellers.html" alt="contains Image of product"><img src=${topPro[0].img} alt="image of products available"></a>
        </figure>
        <figure id="goest" class="data" >
        <figcaption>
            <h2>
            <a href="subpages/goest.html" alt="contains Name of product">${goestperf.category}</a></h2>
        </figcaption>
            <a id=${goestPro[0]._id} href="subpages/goest.html" alt="contains Image of product"><img src=${goestPro[0].img} alt="image of products available"></a>
        </figure>
        <figure id="figYarrow" class="data" >
        <figcaption>
            <h2>
            <a href="subpages/yarrow.html" alt="contains Name of product">${figYarrow.category}</a></h2>
        </figcaption>
            <a id=${figPro[0]._id} href="subpages/yarrow.html" alt="contains Image of product"><img src=${figPro[0].img} alt="image of products available"></a>
        </figure>
        <figure id="botanical" class="data" >
        <figcaption>
            <h2>
            <a href="subpages/botanical.html" alt="contains Name of product">${botanical.category}</a></h2>
        </figcaption>
            <a id=${boPro[0]._id} href="subpages/botanical.html" alt="contains Image of product"><img src=${boPro[0].img} alt="image of products available"></a>
        </figure>`)

        $("#topSeller",function(e){
          e.preventDefault()
        })

    })

})