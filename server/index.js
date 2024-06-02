import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./src/routes/authRoute.js";
dotenv.config();

const PORT= process.env.PORT || process.env.API_PORT;

const app=express();
app.use(express.json());
app.use(cors());


const server=http.createServer(app);

app.get('/',(req,res)=>{
  return   res.send("Hello world");
})

app.use('/api/auth',authRoute);


server.listen(PORT,()=>{
   console.log(`PORT is listening on ${PORT}`);
});
