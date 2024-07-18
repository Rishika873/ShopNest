
import express, { Router } from 'express';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import cors from 'cors';
import bodyParser from 'body-parser';


import Connection from './database/db.js';
import router from './routes/route.js';



const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/' , router);

const PORT = process.env.PORT ||8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const URL = process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@ecommerce-web.jjts7up.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-web`;



Connection(URL);



app.listen(PORT, () => console.log(`Server is running successfully on port ${PORT}`));

DefaultData();

