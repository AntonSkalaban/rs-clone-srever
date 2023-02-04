import Router from "express"
import CardController  from "../controller/CardController.js"

const cardsRouter = new Router()

cardsRouter.post('/cards', CardController.create)
cardsRouter.get('/cards', CardController.getAll)
cardsRouter.get('/cards/:id', CardController.getOne)
cardsRouter.put('/cards', CardController.update)
cardsRouter.delete('/cards/:id', CardController.delete)

export default cardsRouter