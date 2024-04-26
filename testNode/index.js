require('dotenv').config();
const express = require('express');
const app = express();

PORT = process.env.PORT || 3000;

app.get('/',(req, res)=>{
res.status(200).json({'response':'i\'m home'});
});

app.listen(PORT, (req, res) =>{
    console.log('server is running...');
});