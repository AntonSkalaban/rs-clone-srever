import Router from 'express';
import DepositController from '../controller/DepositController.js';

const creditRouter = new Router();

creditRouter.post('/deposits', DepositController.create);
creditRouter.get('/deposits', DepositController.getAll);
creditRouter.get('/deposits/:id', DepositController.getOne);
creditRouter.put('/deposits', DepositController.update);
creditRouter.delete('/deposits/:id', DepositController.delete);
