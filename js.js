let express = require("express")
let app = express()
let port = 3000

app.get("/", (req, res)=>{
res.send("get")
})

app.listen(port, ()=>{
console.log(`server running on port ${port}`)
})