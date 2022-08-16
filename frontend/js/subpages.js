$(document).ready(function(){
    const db_url = 'https://accessibilityproject.herokuapp.com/getData'
    $.getJSON(`${db_url}`, function(data){
        let TopSellers = data[0].product;
        let Goest = data[1].product;
        let Yarrow = data[2].product;
        let Botanical = data[3].product;
        $.each(TopSellers, function(index, value){
            $('#topSellers').append(`
            <figure>
                <aside>
                    <img src=${value.img} alt="image of products available">
                </aside>
                <figcaption>
                <h3 class="data getData">${value.name}</h3>
                <h4 class="data getData">£<span>${value.price}</span></h4>
                <button aria-label="add ${value.name} to cart Button" class="addCart productVal data">Add To Cart</button>
                </figcaption>
            </a>`
            )
        })
        $.each(Goest, function(index, value){
            $('#goestPer').append(`
            <figure>
                <aside>
                    <img src=${value.img} alt="image of products available">
                </aside>
                <figcaption>
                    <h3 class="data getData">${value.name}</h3>
                    <h4 class="data getData">£<span>${value.price}</span></h4>
                    <button aria-label="add ${value.name} to cart Button" class="addCart productVal data">Add To Cart</button>                
                </figcaption>
            </figure>
            `
            )
        })
        $.each(Yarrow, function(index, value){
            $('#yarrow').append(`
            <figure>
                <aside>
                    <img src=${value.img} alt="image of products available">
                </aside>
                <figcaption>
                <h3 class="data getData">${value.name}</h3>
                <h4 class="data getData">£<span>${value.price}</span></h4>
                <button aria-label="add ${value.name} to cart Button" id="${value.name}"  class="addCart productVal data">Add To Cart</button>
                </figcaption>
            </figure>
            `
            )
        })
        $.each(Botanical, function(index, value){
            $('#botanical').append(`
            <figure>
                <aside>
                    <img src=${value.img} alt="image of products available">
                </aside>
                <figcaption>
                <h3 class="data getData">${value.name}</h3>
                <h4 class="data getData">£<span>${value.price}</span></h4>
                <button aria-label="add ${value.name} to cart Button" class="addCart productVal data">Add To Cart</button>
                </figcaption>
            </figure>
            `
            )
        })
    })
    // $('#goBackOption').click(function(e){
    //     e.preventDefault()
    // })
})