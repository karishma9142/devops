import express from 'express'

const app = express();
app.use(express.json());

app.get("/" , (req , res) => {
    res.send("hello karishma")
})

app.listen(3000 , ()=> {
    console.log("server running on port 3000");
})