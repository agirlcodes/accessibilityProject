// const e = require("cors")

$(document).ready(function(){
    const db_url = 'http://localhost:3000'
    $.getJSON(`${db_url}/getData`, function(data){
        // console.log(data)
      let topSellers = data[0]
      let topPro = topSellers.product
      let goestperf = data[1]
      let goestPro = goestperf.product
      let figYarrow = data[2]
      let figPro = figYarrow.product
      let botanical = data[3]
      let boPro = botanical.product
      console.log(topSellers)
      $('#catalog').append(`
      <figure id="topSeller" class="data" data-target="#modal1">
          <a id=${topPro[0]._id} href="" alt="contains Image of product"><img src=${topPro[0].img} alt="image of products available"></a>
          <figcaption>
              <h2>
              <a href="" alt="contains Name of product">${topSellers.category}</a></h2>
          </figcaption>
      </figure>
      <figure id="goest" class="data" data-target="#modal2">
          <a id=${goestPro[0]._id} href="" alt="contains Image of product"><img src=${goestPro[0].img} alt="image of products available"></a>
          <figcaption>
              <h2>
              <a href="" alt="contains Name of product">${goestperf.category}</a></h2>
          </figcaption>
      </figure>
      <figure id="figYarrow" class="data" data-target="#modal3">
          <a id=${figPro[0]._id} href="" alt="contains Image of product"><img src=${figPro[0].img} alt="image of products available"></a>
          <figcaption>
              <h2>
              <a href="" alt="contains Name of product">${figYarrow.category}</a></h2>
          </figcaption>
      </figure>
      <figure id="botanical" class="data" data-target="#modal4">
          <a id=${boPro[0]._id} href="" alt="contains Image of product"><img src=${boPro[0].img} alt="image of products available"></a>
          <figcaption>
              <h2>
              <a href="" alt="contains Name of product">${botanical.category}</a></h2>
          </figcaption>
      </figure>`)

        $("#topSeller").click(function(e){
          e.preventDefault()
          $(".popup, .popup-content").addClass("active");
          // console.log(dataSelected)
          $(".popup-content").append(`
          <h1>${botanical.category}</h1>
          `)
          for (let i = 0; i < topPro.length; i++) {
            const topSell = topPro[i];
            console.log(topSellers)
              $("#modalContent1").append(`
              <figure>
                <img src="${topSell.img}">
                <h2>${topSell.name}</h2>  
                <h4>£${topSell.price}</h4>
                <button>Add To Cart</button>
              </figure>
              `)
          }
          console.log("hello?")
        });
        $("#goest").click(function(e){
          e.preventDefault()
          $(".popup, .popup-content").addClass("active");
          // let dataSelected = $("#topData").val()
          // console.log(dataSelected)
          $(".popup-content").append(`
          <h1>${figYarrow.category}</h1>`)
          console.log("hello?")
        });
        $("#figYarrow").click(function(e){
          e.preventDefault()
          $(".popup, .popup-content").addClass("active");
          // console.log(dataSelected)
          // $(".popup-content").append(dataSelected)
          console.log("hello?")
        });
        $("#botanical").click(function(e){
          e.preventDefault()
          $(".popup, .popup-content").addClass("active");
        });
        $(".close, .popup").click(function(){
          $(".popup, .popup-content").removeClass("active");
        });
// 
        const btns = document.querySelectorAll("[data-target]");
        const close_modals = document.querySelectorAll(".close-modal");
        const overlay = document.getElementById("overlay");
        btns.forEach((btn) => {
          btn.addEventListener("click", () => {
            document.querySelector(btn.dataset.target).classList.add("active");
            overlay.classList.add("active");
          });
        });
        close_modals.forEach((btn) => {
          btn.addEventListener("click", () => {
            const modal = btn.closest(".modal");
            modal.classList.remove("active");
            overlay.classList.remove("active");
          });
        });
        window.onclick = (event) => {
          if (event.target == overlay) {
            const modals = document.querySelectorAll(".modal");
            modals.forEach((modal) => modal.classList.remove("active"));
            overlay.classList.remove("active");
          }
        };

        for (let i = 0; i < goestPro.length; i++) {
          const goest = goestPro[i];
          $("#modalContent2").html(`
          <figure>
          <img src="${goest.img}">
          <h2>${goest.name}</h2>  
          <h4>£${goest.price}</h4>
          <button>Add To Cart</button>
          </figure>
          `)
          console.log(goest)
        }
        for (let i = 0; i < figPro.length; i++) {
          const fig = figPro[i];
          console.log(fig)
            $("#modalContent3").html(`
            <figure>
              <img src="${fig.img}">
              <h2>${fig.name}</h2>  
              <h4>£${fig.price}</h4>
              <button>Add To Cart</button>
            </figure>
            `)
        }
        for (let i = 0; i < boPro.length; i++) {
          const botanical = boPro[i];
            $("#modalContent4").html(`
            <figure>
              <img src="${botanical.img}">
              <h2>${botanical.name}</h2>  
              <h4>£${botanical.price}</h4>
              <button>Add To Cart</button>
            </figure>
            `)
        }

    })

})