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
    })
    
})