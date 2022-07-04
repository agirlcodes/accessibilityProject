require('./mongoose/server.js')
// ADDING DATA TO DB

const sleep = async (ms) => {
return new Promise((resolve) => setTimeout(resolve, ms))
}

const products = async () => {
    await sleep(15000);
// SCHEMA
    const Products = require('./models/products')
    const newProduct = new Products({
        proName: "",
        img: "",
        proDescription: "",
        proPrice: 12,
        proCategory: ""
    })

    newProduct.save((err, products)=>{
        if(err) console.log(err)
        console.log(products)
    })

}
products()

