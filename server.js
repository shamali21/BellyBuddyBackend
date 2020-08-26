const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config() //enve variables 

const app = express();// server config
const port = process.env.PORT || 8080 ; //port

app.use(cors());//middle were 
app.use(express.json());//parse jason 

const uri = process.env.ATLAS_URI;//url 
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex: true});
//passs uir , newuserparser
const connection = mongoose.connection; //
connection.once('open', () => {
    console.log("mongooose deatabaseconnection success");
    console.log(uri);

})

const menuRouter = require('./routes/menu');
const menusRouter = require('./routes/menus');

const resRouter = require('./routes/res');


app.use('/menu', menuRouter);//use files
app.use('/menus', menusRouter);//use files
app.use('/res' , resRouter);

if(process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build' , 'index.html'));
    });
}

app.listen(port, () => { //starts the server
    console.log(`Server is running on the port: ${port}`);

});