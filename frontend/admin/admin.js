$(document).ready(function(){
    const db_url = 'http://localhost:3000'
      
      // function deleteRequest() {
      //   $.ajax({
      //     url: 'test.html',
      //     type: 'DELETE',
      //     success: function (result) {
      //       // Do something with the result
      //       console.log("i am deleted")
      //     }
      //   });
      // }
      
    $.getJSON(`${db_url}/getData`,(data)=>{
      $.each(data,function(key, value){      
      // POST DATA FROM FORM
    $("#subBtn").click(function () {
      let name = $("#productName").val();
      let img = $("#productImg").val();
      let price = $("#productPrice").val();
      let category = $("#categoryList").val();
      let id = value._id
      console.log(name, img, price, category, id )
      let newData = {
          id,
          category:category,
          name: name,
          img: img,
          price: price,
        }
        // if(value.category === category){ 
          // console.log(
          // targetID = get data into right category
          // value.product = ()=>{
          $.post(`${db_url}/insert`, {newData}, function(){
            console.log("insert successful")
          })
      })
      // Get Category for form
      listCat = `<option value="${value.category}">${value.category}</option>`
      $('#categoryList').append(listCat)
<<<<<<< HEAD
=======
      // db.getCollection('products').find({product: value.product},()=>{


      //   console.log(product)
      })
>>>>>>> 375658b1812715ec538d3e8ebce144cb0c88902b

    // DATA DISPLAY ON CLICK
      //   $('#overviewBtn').click(()=>{
      //   category = '<h1>'+ value.category + '</h1>';
      //   $(category).appendTo('#overviewSection')
      //   $.each(value.product,function(key, item){
      //     console.log(category)
      //     product = `
      //       <figure>
      //         <img src="${item.img}">
      //         <figcaption>
      //           <h3>${item.name}</h2>
      //           <h4>£${item.price}</h4>
      //         </figcatpion>
      //       </figure>
      //       <button onclick="editRequest" id="editBtn">Edit</button>
      //       <button onclick="deleteRequest" id="deleteBtn">Delete</button>
      //     `;
      //     $(product).appendTo('#overviewSection')
      //   })
        
      // })
      
    })
})
