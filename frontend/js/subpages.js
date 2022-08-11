$(document).ready(function(){
    const db_url = 'https://accessibilityproject.herokuapp.com/getData'
    $.getJSON(`${db_url}`, function(data){
        let TopSellers = data[0].product;
        let Goest = data[1].product;
        let Yarrow = data[2].product;
        let Botanical = data[3].product;
        $.each(TopSellers, function(index, value){
            $('#topSellers').append(`
            <a href="catalog/subpages/topSellers.html" alt="contains product image">
            <figure>
                <img src=${value.img} alt="image of products available">
                <figcaption>
                <h2 class="data">${value.name}</h2>
                </figcaption>
            </figure>
            </a>`
            )
        })
        $.each(Goest, function(index, value){
            $('#goestPer').append(`
            <a href="catalog/subpages/topSellers.html" alt="contains product image">
            <figure>
                <img src=${value.img} alt="image of products available">
                <figcaption>
                <h2 class="data">${value.name}</h2>
                </figcaption>
            </figure>
            </a>`
            )
        })
        $.each(Yarrow, function(index, value){
            $('#yarrow').append(`
            <a href="catalog/subpages/topSellers.html" alt="contains product image">
            <figure>
                <img src=${value.img} alt="image of products available">
                <figcaption>
                <h2 class="data">${value.name}</h2>
                </figcaption>
            </figure>
            </a>`
            )
        })
        $.each(Botanical, function(index, value){
            $('#botanical').append(`
            <a href="catalog/subpages/topSellers.html" alt="contains product image">
            <figure>
                <img src=${value.img} alt="image of products available">
                <figcaption>
                <h2 class="data">${value.name}</h2>
                </figcaption>
            </figure>
            </a>`
            )
        })
    })
})