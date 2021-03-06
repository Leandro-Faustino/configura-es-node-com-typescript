import { Router } from 'express';
import NaversController from '@modules/navers/infra/controllers/NaversController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const naversRouter = Router();
const naversController = new NaversController();
naversRouter.use(ensureAuthenticated);

naversRouter.post('/store', naversController.create);
naversRouter.get('/index', naversController.index);
naversRouter.get('/:id', naversController.show);
naversRouter.put('/:id', naversController.update);
naversRouter.delete('/:id', naversController.delete);

export default naversRouter;
