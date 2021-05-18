import { Router } from 'express';
import UserController from './app/controllers/userController';

const routes = new Router();

routes.get('/api', (req, res) => {
    res.status(200).send({
        success: "true",
        title: 'Seja bem-vindo(a) no GigAPI Node.js + PostgreSQL!',
        version: '1.0.0'
    });
});

routes.post('/users', UserController.store);
routes.post('/users', UserController.index);
routes.post('/users', UserController.show);
routes.post('/users', UserController.update);
routes.post('/users', UserController.delete);

export default router;
