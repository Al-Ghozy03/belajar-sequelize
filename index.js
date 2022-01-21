const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const port = process.env.PORT || 8000
const router = require("./routes/router")

app.use(express.json())
app.use(router)
app.listen(port,()=>console.log(`berjalan di ${port}`))