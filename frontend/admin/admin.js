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
      console.log(name, img, price, category )
      let newData = {
          name: name,
          img: img,
          price: price,
        }
        if(value.category === category){ 
          console.log(value.product)
          // value.product = ()=>{
            // $.post(`${db_url}/insert`, {newData}, function(){
              console.log("insert successful")
              console.log(newData)
            // })
          // }
        }
      })
      // Get Category for form
      listCat = `<option value="${value.category}">${value.category}</option>`
      $('#categoryList').append(listCat)
      // db.getCollection('products').find({product: value.product},()=>{


      //   console.log(product)
      // })

    // DATA DISPLAY ON CLICK
        $('#overviewBtn').click(()=>{
        category = '<h1>'+ value.category + '</h1>';
          $(category).appendTo('#overviewSection')
          $.each(value.product,function(key, item){
            console.log(category)
            product = `
              <figure>
                <img src="${item.img}">
                <figcaption>
                  <h3>${item.name}</h2>
                  <h4>£${item.price}</h4>
                </figcatpion>
              </figure>
              <button onclick="editRequest" id="editBtn">Edit</button>
              <button onclick="deleteRequest" id="deleteBtn">Delete</button>
            `;
            $(product).appendTo('#overviewSection')
          })
        })
      })
    })
});
