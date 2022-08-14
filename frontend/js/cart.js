$(document).ready(function(){
// NEED TO FIND A WAY TO GET ITEMS TO CART WITHOUT REFRESHING
// function removeItem(name, price, count){
//     for (var i in item) {
//         if (this.item[i].name === name) {
//             var singleItemCost = Number(price / this.cart[i].count);
//             this.cart[i].count = count;
//             this.cart[i].price = singleItemCost * count;
//             if (count == 0) {
//                 this.cart.splice(i, 1);
//             }
//             break;
//         }
//     }
//     save();
// }
let setItems = [];
function save(){
    localStorage.setItem('product', JSON.stringify(setItems))  
}
function loadCart(){
    setItems = JSON.parse(localStorage.getItem('product'));
    console.log(setItems)
    if(setItems.length === null){
        setItems = []
    }
    return
}
function reload() {
    reload = location.reload();
}
console.log(setItems)
$(document).on('click', 'button[class^="addCart"]', function() {
    console.log("working")
    let img = $(this).parent().parent().find('img')[0].src
    let name = $(this).siblings()[0].innerHTML
    let price = $(this).siblings()[1].innerHTML
    let selectedItem = {name: name,img: img,price: price, id: uuidv4()}
    setItems.push(selectedItem)
    alert(`You have added ${name} to cart`)
    save()
    loadCart()
})
$('#cartModal').click(reload, function(){
    loadCart(setItems)
    console.log(setItems)
    if($(setItems) != null){
        $('#cart').html('')  
        for (let i = 0; i < setItems.length; i++) {
            const el = setItems[i];
            console.log(el.name)
            // return;
            // $(setItems).each(function(index, value){
                // location.reload()
                // console.log(index, value.name)
                // if(indexId === index){
                    //     console.log("I am repeated", indexId)
            $('#cart').append(`
                <figure class="data">
                <img class="searchBarImg" src="${el.img} alt="image of products available>
                <figcaption class="data">
                <h3>${el.name}</h3>
                <p class="data">${el.price}</p>
                <button id=${el.id} class="removeItem" type="submit">Remove Item</button>
                </figcaption>
            </figure>`)                      
        }
                // e.preventDefault()
                // loadCart(setItems)
                // // console.log(loadCart(setItems))
                // // let storedItems = JSON.parse(localStorage.getItem('product'));
                // let indexId = $(this).children()[0];
                // console.log(indexId)
                // )
            }
            else{
                console.log("refresh please")
            }
        })    
$('.removeItem').click(function(){
    // removeItem()
    // console.log(returnData.index()
    // let id = $(this).attr('id');
    console.log("remove")
    for (const i in setItems) {
        let indexId = $(this).parent().parent()[0].id;
        if(indexId === index){
            returnData.splice(i, 1)
            console.log()
        }
        break;
    }
    save()
    // returnData.splice(indexId, 1)
    // // if()
    // console.log(indexId)
    // console.log()
    // save()
    // let name = $(this).siblings()[0].innerHTML
    // let price = $(this).siblings()[1].innerHTML
    // let deleteItem = [{name: name,img: img,price: price}]
    // localStorage.setItem('products', JSON.stringify)
})
    // console.log(returnData[index].value)
    // let removeItem = index
    // console.log(returnData)   
    // for (let i = 0; i < returnData.length; i++) {
    //     const element = returnData[i];
    //     // let selectedEle = element, i
    //     console.log(element)
    // }
    // $(removeItem).each(function(value){
    //  console.log(value)
    // })                   
    
})