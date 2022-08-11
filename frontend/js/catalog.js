$(document).ready(function(){
    const db_url = 'https://accessibilityproject.herokuapp.com/getData'
    $.getJSON(`${db_url}`, function(data){
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
        <a href="subpages/topSellers.html" alt="contains Name of product">
            <figure id="topSeller" class="data" >
                <aside>
                    <img src=${topPro[0].img} alt="image of ${topSellers.category} products available">
                </aside>
                <figcaption>
                    <h2>${topSellers.category}</h2>
                </figcaption>
            </figure>
        </a>
        <a href="subpages/goest.html" alt="contains Name of product">
            <figure id="goestPerfume" class="data" >
            <img src=${goestPro[0].img} alt="image of ${goestperf.category} products available">
                <figcaption>
                    <h2>${goestperf.category}</h2>
                </figcaption>
            </figure>
        </a>
        <a href="subpages/yarrow.html" alt="contains Name of product">
            <figure id="figYarrow" class="data" >
            <img src=${figPro[0].img} alt="image of ${figYarrow.category} productsavailable">
                <figcaption>
                    <h2>${figYarrow.category}</h2>
                </figcaption>
            </figure>
        </a>
        <a href="subpages/botanical.html" alt="contains Name of product">
            <figure id="botanical" class="data" >
            <img src=${boPro[0].img} alt="image of ${botanical.category} products available">
                <figcaption>
                    <h2>${botanical.category}</h2>
                </figcaption>
            </figure>
        </a>`)
            
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