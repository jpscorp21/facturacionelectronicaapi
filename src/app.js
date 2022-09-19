import express from 'express'
import cors from 'cors'
import morgan from "morgan";
import helmet from 'helmet';
import router from './routes.js';


const createApp = () => {
    const app = express();
    app.use(cors());
    app.use(helmet())
    app.use(morgan('dev'))
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));

    app.use('/api', router)    

    return app;
}

export default createApp