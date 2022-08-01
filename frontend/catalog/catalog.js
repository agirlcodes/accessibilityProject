$(document).ready(function(){
    const db_url = 'http://localhost:3000'
    $.getJSON(`${db_url}/getData`, function(data){
        let topSellers = data[0]
        let topPro = topSellers.product
        let goestperf = data[1]
        let goestPro = goestperf.product
        let figYarrow = data[2]
        let figPro = figYarrow.product
        let botanical = data[3]
        let boPro = botanical.product
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
            
            $("#topSeller",function(){
                $.each(topPro, function(index, value){
                    $('#topSellers').append(`
                    <figure class="data">
                    <a href="/frontend/catalog/subpages/topSellers.html" alt="contains Image of product"><img src=${value.img} alt="image of products available"></a>
                    <figcaption>
                    <ul>
                    <li><h2><a href="/frontend/catalog/subpages/topSellers.html" alt="contains Name of product"></h2>${value.name}</a></li>
                    <li data-price="${value.price}">£ ${value.price}</li></ul>
                    </figcaption>
                    </figure>
                    <button class="sc-add-to-cart" data-name="${value.name}" data-price="${value.price}" type="submit">ADD To Cart</button>
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
            
        })
        
    })