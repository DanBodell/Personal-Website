const express = require('express');
const routes = require('./routes/api');

const app = express();

const port = process.env.PORT || 5000;

//CORS snippet
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();  
})

//app.use('/api', routes);

//error log
/*
app.use((err, req, res, next) => {
    console.log(err);
    next();
});
*/

app.use((req,res,next) => {
    res.send('welcome');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});