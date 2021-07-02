import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRouter from './routes/posts.js'

const app = express();

//middleware 

app.use('/posts',postRouter);

app.use(bodyparser.json({limit : "30mb",extended:true}));
app.use(bodyparser.urlencoded({limit : "30mb",extended:true}));

app.use(cors());

//database connect

const DB_URL ='mongodb+srv://Irfan:Irfan@123@cluster0.dpfux.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 8000;

mongoose.connect(DB_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=> console.log(`Server is Running on port ${PORT}`)))
.catch((err)=> console.log(err.message));

mongoose.set('useFindAndModify',false);