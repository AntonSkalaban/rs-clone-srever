import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import cardsRouter from "./routers/cardRouter.js"
import creditRouter from "./routers/creditRouter.js"

const PORT = 3000
const DB_URl = `mongodb+srv://user:user@cluster0.j6kqtdi.mongodb.net/?retryWrites=true&w=majority`
const app = express()

app.use(cors())
app.use(express.json())
app.use('/products', cardsRouter)
app.use('/products', creditRouter)

async function startApp() {
    try {
        mongoose.connect(DB_URl, { useNewUrlParser: true, useUnifiedTopology: true })
        app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

startApp()