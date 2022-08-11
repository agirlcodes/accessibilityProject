$(document).ready(function(){
    $('#cartModal').click(function(e){
        e.preventDefault();
        // alert("hello")
        console.log(localStorage.getItem(productName))
    })


// SUBPAGES Add to Cart button
const db_url = 'https://accessibilityproject.herokuapp.com/getData'
$.getJSON(`${db_url}`, function(data){
    let productitems = [];
    let item = [];
    $.each(data, function(index, value){
        let product = value.product
        $.each(product, function(index, typ){
            productitems.push(typ)
        })
    })
    $(document).on('click', 'button[class^="addCart"]', function(e) {
        let productName = this.id;
        $.each(productitems, function(index,value){
            if(productName === value.name){
                item.push({name: value.name,img: value.img,price: value.price, id: uuidv4()})
                localStorage.setItem('product', JSON.stringify(item))
            }else{
                console.log("not found")
            }
            });
        })

})





    
})