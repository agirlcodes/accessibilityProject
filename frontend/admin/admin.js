$(document).ready(function(){
    const db_url = 'http://localhost:3000'
    $("#subBtn").click(function () {
        // $("#name").val();
        let name = $("#productName").val();
        let img = $("#productImg").val();
        let price = $("#productPrice").val();
        let description = $("#productDescription").val();
        let category = $("#productCategory").val();
        console.log(name, img, price, description, category )
        let newData = {
            name: name,
            desc: description,
            price: price,
            category: category
        }

        fetch(`${db_url}/insert`, {
          method: 'POST',
          headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body: JSON.stringify(newData)
        }).catch(err => console.log(err))
        
        
      });
  $('#overviewBtn').click(()=>{
    fetch(`${db_url}/getData`)
      .then(response => response.json())
      .then ((response) => {
        console.log(response);

        $('#overviewSection').html(`
        <h2>${response.proName}</h2>
        <img src="${response}">
        `)
      })

  })

});
