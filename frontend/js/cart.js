$(document).ready(function(){
    let setItems = []
    let num = 0
    let price = []
$(document).on('click', 'button[class^="addCart"]', function(e) {
    let selectedItem = {
        name: e.target.parentElement.children[0].textContent,
        img: e.target.parentNode.parentElement.children[0].children[0].src,
        price: e.target.parentElement.children[1].children[0].textContent, 
        id: uuidv4(),
        num: 1
    }
    if(JSON.parse(localStorage.getItem('product')) === null){
        setItems.push(selectedItem)
        localStorage.setItem('product', JSON.stringify(setItems))  
        window.location.reload()

    }
    else{
        let localItems = JSON.parse(localStorage.getItem('product'));
        localItems.map(data=>{
            if (selectedItem.name == data.name) {
                selectedItem.num = data.num +1;
            }
            else{
                setItems.push(data)
            }
        });
        setItems.push(selectedItem)
        localStorage.setItem('product', JSON.stringify(setItems))
        alert(`You have added ${selectedItem.name}`)
        location.reload()
    }
  
})

$('.cartModal').click(function(){
    if(JSON.parse(localStorage.getItem('product')) === null){
        alert("Your Cart is empty")
        $('.close-modal').click('#close-modal')
    }
})
// SHOPPIN NUM
let cartNum = document.querySelector('.cartNum')
JSON.parse(localStorage.getItem('product')).map(data=>{
    num = num+data.num
    let itemPrice = parseInt(data.price)
    price.push(itemPrice)
})
cartNum.innerHTML = num
console.log(price)

// ADDING DATA IN TABLE
let sumTotal = price.reduce((r,c) => r + parseFloat(c), 0)
$('.cartTotal').html(`<h5>£ ${sumTotal}</h5>`)
let cartTable = document.getElementById('cartDisplayLayout')
console.log(sumTotal)
let dataInsert = '';
$(cartTable).append(`
        <thead>
        <tr>
            <td><h2 class="data cartHeading">Nirvana Cosmetics</h2></td>
            <td><h3 class="data mobileCartTitle">Your Cart</h3></td>
        </tr>
        <tr>
            <th><h3>Item</h3></th>
            <th><h3><dfn title="Quantity">Qty.</dfn></h3></th>
            <th><h3>Price</h3></th>
            <th><h3>Remove</h3></th>
        </tr>
        </thead>
        <tbody id="insertCart">
        </tbody>
        <tr>
        <td><h4 class="data">TOTAL</h4></td>
        <td class="data">${num}</td>
        <td class="sumTotal data">£ ${sumTotal}</td>
        </tr>
`)
if (JSON.parse(localStorage.getItem('product')) === null) {
    console.log("im empty")
    $('#cartLayout').append(`
        <tr>
            <td colspan="5">There are no items in your Cart</td>
        </tr>
    `)  
}else{
    JSON.parse(localStorage.getItem('product')).map(data=>{
        $('#insertCart').append(` <tr class="data">
            <td class="cartProductLayout">
                <img class="searchBarImg" src="${data.img} alt="${data.name} products available>
                <h3 class="data">${data.name}</h3>
            </td>
            <td>${data.num}</td>
            <td class="data">£ ${data.price}</td>
            <td><button class="deleteCartItem" aria-label="delete item from cart" type="button"  >Delete</button></td>
        </tr>`)
    })
}

console.log(JSON.stringify(sumTotal))

paypal.Buttons({
    // Sets up the transaction when a payment button is clicked
    createOrder: (data, actions) => {
        return actions.order.create({
            purchase_units: [{
          amount: {
              value: sumTotal // Can also reference a variable or function
            }
        }]
    });
},
// Finalize the transaction after payer approval
onApprove: (data, actions) => {
    return actions.order.capture().then(function(orderData) {
        // Successful capture! For dev/demo purposes:
        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
        const transaction = orderData.purchase_units[0].payments.captures[0];
        alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);
        // When ready to go live, remove the alert and show a success message within this page. For example:
        // const element = document.getElementById('paypal-button-container');
        // element.innerHTML = '<h3>Thank you for your payment!</h3>';
        // Or go to another URL:  actions.redirect('thank_you.html');
    });
}
}).render('#paypal-button-container');



// function 
// $('.removeItem').click(function(){
//     // removeItem()
//     // console.log(returnData.index()
//     // let id = $(this).attr('id');
//     console.log("remove")
//     for (const i in setItems) {
//         let indexId = $(this).parent().parent()[0].id;
//         if(indexId === index){
//             returnData.splice(i, 1)
//             console.log()
//         }
//         break;
//     }
//     save()
//     // returnData.splice(indexId, 1)
//     // // if()
//     // console.log(indexId)
//     // console.log()
//     // save()
//     // let name = $(this).siblings()[0].innerHTML
//     // let price = $(this).siblings()[1].innerHTML
//     // let deleteItem = [{name: name,img: img,price: price}]
//     // localStorage.setItem('products', JSON.stringify)
// })
})