import Router from "express"
import CreditController  from "../controller/CreditController.js"

const creditRouter = new Router()

creditRouter.post('/credits', CreditController.create)
creditRouter.get('/credits', CreditController.getAll)
creditRouter.get('/credits/:id', CreditController.getOne)
creditRouter.put('/credits', CreditController.update)
creditRouter.delete('/credits/:id', CreditController.delete)

export default creditRouter
