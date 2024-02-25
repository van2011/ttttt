import express from "express"
import "dotenv/config"
import router from "./routes/productRoute.js"
import cors from "cors"
const port = process.env.PORT || 5000
let app = express()
app.use(express.json())
app.use(cors())
app.use("/api", router)

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})

