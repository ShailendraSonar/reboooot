const express=require('express');
const { user } = require('./models/User');
const router = require('./routes/route');
const app=express();
const cors = require('cors'); // Import cors module
app.use(express.json())


user.sync();

// user.sync({force:true});



app.use(cors());

app.get('/',(req,res)=>{
    res.send("<h1>hello everyone<h1/>")
})

app.use(router)

app.listen(3001,()=>{
    console.log("app started at localhost 3001");
})