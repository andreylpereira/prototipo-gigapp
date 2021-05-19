import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger_output.json';
import SessionController from './app/controllers/SessionController';
import AuthMiddleware from './app/middlewares/auth';
import UserController from './app/controllers/userController';


const routes = new Router();

routes.use('/api/docs', swaggerUi.serve);
routes.get('/api/docs', swaggerUi.setup(swaggerFile));

routes.get('/api', (req, res) => {
    res.status(200).send({
        success: "true",
        title: 'Seja bem-vindo(a) no GigAPI + Node.js + PostgreSQL!',
        version: '1.0.0'
    });
});

routes.get('/users', UserController.show);
routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);
// routes.post('/users', UserController.index);
// routes.post('/users', UserController.show);
// routes.post('/users', UserController.update);
// routes.post('/users', UserController.delete);


//routes.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
routes.put('/users/:id', AuthMiddleware, UserController.update);

export default routes;
