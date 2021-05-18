import { Router } from 'express';

const router = new Router();

router.get('/api', (req, res) => {
    res.status(200).send({
        success: "true",
        title: 'Seja bem-vindo(a) no GigAPI Node.js + PostgreSQL!',
        version: '1.0.0'
    });
});

export default router;
