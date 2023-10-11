import { Router } from 'express';
import appInit from '@framework/web/middlewares/appInit.middleware';
import { IDependency } from '@application/ports/IDependency'; 
import transactionControllerCreate from '@presentation/controllers/transaction.controller';

const router = Router();

export const projectRouter = (dependencies:IDependency) => {
  const projectController = transactionControllerCreate(dependencies);

  router.use(appInit);

  router.get('/', projectController.getController);
  return router;
}
