import express from 'express';

import router from './Routes/routes'

const server = express();
const port = process.env.PORT || 3000;

server.use(express.json());
server.use('/', router);

server.listen(port, () => { 
    console.log(`Server running in http://localhost:${port}`);
});