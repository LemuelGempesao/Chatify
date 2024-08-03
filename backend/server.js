
import express from 'express';
import connectToDb from './db/db.config.js';
import path from 'path'
import cookieParser from 'cookie-parser';

import 'dotenv/config';

import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import userRoutes from './routes/user.route.js'
import { app, server } from './socket/socket.js';




const port = process.env.PORT || 5000;

const __dirname = path.resolve();



app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})

server.listen(port, async () => {
    try {
        await connectToDb();
        console.log("Server is watching")
    }
        
    catch (error) {   
        console.log(error.message);
    }
   
});
