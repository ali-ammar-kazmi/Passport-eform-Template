const express = require('express');
const app = express();

app.listen(5000,()=>{console.log('Hit the server!!')});

app.use(express.static(__dirname));