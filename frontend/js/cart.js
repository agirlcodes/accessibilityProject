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
function calTotals(){
    setItems = JSON.parse(localStorage.getItem('product'));
    for (let i = 0; i < setItems.length; i){
        let elm = setItems[i]
        console.log(elm)
    }
    // console.log(setItems)
}
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
        // calTotals()
        for (let i = 0; i < setItems.length; i++) {
            const el = setItems[i];
            console.log(el.price)
            $('#insertCart').append(`
                <tr class="data">
                    <td class="cartProductLayout">
                        <img class="searchBarImg" src="${el.img} alt="${el.name} products available">
                        <h3 class="data">${el.name}</h3>
                    </td>
                    <td class="data">${el.price}</td>
                    <td class="data">${el.price}</td>
                </tr>`)                      
                }
                // <button id=${el.id} class="removeItem" type="submit">Remove Item</button>
                // e.preventDefault()
                // loadCart(setItems)
                // // console.log(loadCart(setItems))
                // // let storedItems = JSON.parse(localStorage.getItem('product'));
                // let indexId = $(this).children()[0];
                // console.log(indexId)
                // )
    }
    else{
        alert("cart is empty!");
        $('#insertCart').append('<p>Your Cart Is Empty</p>')
        console.log("refresh please")
    }
    })    
        // function 
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

paypal.Buttons({
    // Sets up the transaction when a payment button is clicked
    createOrder: (data, actions) => {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: '77.44' // Can also reference a variable or function
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