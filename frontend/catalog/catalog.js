$(document).ready(function(){
    const db_url = 'https://accessibilityproject.herokuapp.com/getData'
    $.getJSON(`${db_url}/getData`, function(data){
        console.log(data)
        let topSellers = data[1]
        let topPro = topSellers.product
        let goestperf = data[0]
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
            <a class="overlay" id=${topPro[0]._id} href="subpages/topSellers.html" alt="contains Image of product"><img src=${topPro[0].img} alt="image of products available"></a>
        </figure>
            <figure id="goestPerfume" class="data" >
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
            
        // $("#topSeller").click(function(){
        //     $.each(topPro, function(index, value){
        //         $('#topSellers').append(`
        //         <figure class="data">
        //         <img src=${value.img} alt="image of products available">
        //         <figcaption>
        //         <ul>
        //         <li><h2>${value.name}</h2></li>
        //         <li data-price="${value.price}">£ ${value.price}</li></ul>
        //         </figcaption>
        //         <button class="sc-add-to-cart" data-name="${value.name}" data-price="${value.price}" type="submit">ADD To Cart</button>
        //         </figure>
        //         `)
        //     })
        //     // $('#cart').simpleCart();
        //     // $("#cart").css("display", "none");
        //     // $('#cartModal').click(function(event){
        //     //     event.preventDefault();
        //     //     console.log("im on catalog?")
        //     //     $('#cart').toggle()
                
        //     // })
        // //     $('#closeModal').click(function(event){
        // //         event.preventDefault();
        // //         $('#cart').css("display: none")
        // //         console.log("close it damnnit")
        // //     })
        // })
        // $("#goestPerfume",function(){
        //     alert("clicked on")
        //     $.each(goestPro, function(index, value){
        //         console.log(value)
        //         $('#goestPer').append(`
        //         <figure class="data">
        //         <img src=${value.img} alt="image of products available">
        //         <figcaption>
        //         <ul>
        //         <li><h2>${value.name}</h2></li>
        //         <li data-price="${value.price}">£ ${value.price}</li></ul>
        //         </figcaption>
        //         <button class="sc-add-to-cart" data-name="${value.name}" data-price="${value.price}" type="submit">ADD To Cart</button>
        //         </figure>
        //         `)
        //     })
        // })
            
    })
    
})