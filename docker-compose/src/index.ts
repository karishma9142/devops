import express from 'express';
import { prisma } from './lib/prisma.js';

const app = express();

app.get("/", async (req, res) => {
    try {
        const data = await prisma.user.findMany();
        res.json({
            msg: data
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
})

app.post("/", async (req, res) => {

    try {
        const user = await prisma.user.create({
            data: {
                email: Math.random.toString(),
                name: Math.random.toString(),
            }
        });
        res.json({
            msg: "post endpoint"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
})

app.listen(3000, () => {
    console.log("server listing on port 3000");
})