import express from "express";
import "dotenv/config";
import {users} from "./user.js";
import cors from "cors";
const app = express();


const corsOptions = {
  origin: ["http://localhost:5173", "https://connection13.vercel.app"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions))

app.get("/",(req,res)=>{
    res.send("PSPK ")
})

app.get("/users",(req,res)=>{
    res.send(users)
})


const PORT =process.env.PORT || 8000;
app.listen(PORT,()=>console.log(`🚀🚀🚀Server is running on port ${PORT}`));