import express from 'express';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import router from './routes/routes.js';
import cors from 'cors';
const app = express();
const port = process.env.PORT

app.use(express.json());

app.use(cors());

connectDB()

app.use('/api/v1',router)


app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)

});