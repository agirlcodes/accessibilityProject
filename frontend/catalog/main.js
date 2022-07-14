$(document).ready(function(){
    const db_url = 'http://localhost:3000'
    $.getJSON(`${db_url}/getData`, function(data){
        // console.log(data)
        $.each(data, function(index, value){
            let category =  value.category
            let productImg = value.product[0].img
            $('#catalog').append(`
            <figure class="data">
                <a href="" alt="contains Image of product"><img src=${productImg} alt="image of products available"></a>
                <figcaption>
                    <h2>
                    <a href="" alt="contains Name of product">${category}</a></h2>
                </figcaption>
            </figure>`)
        })
    })
})