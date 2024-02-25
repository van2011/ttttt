import { Router } from "express"
import { products } from "../db.js"
let router = new Router()

router.get("/products", (req, res) => {
    if (req.query.price) {
        const price = req.query.price
        const productsByPrice = products.filter(e => e.price <= price)
        res.send(productsByPrice)
    }
    if (req.query.search) {
        const search = req.query.search
        console.log(search);
        let productsBySearch = products.filter(e => e.title.includes(search)
        )
        console.log(productsBySearch);
        res.send(productsBySearch)
    }
    res.send(products)

})



router.post("/product", (req, res) => {
    let { title, price, id } = req.body
    console.log(title, price, id)
    products.push({ title, price, id })
    // const filePath = path.join(__dirname, "../db.js")
    // const textToAdd = {
    //     title, price, id
    // }
    // fs.appendFile(filePath, "TEXT")

    res.json({title, price, id})
})

export default router