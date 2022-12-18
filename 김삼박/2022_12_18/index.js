const express = require("express");
const session = require('express-session');

const multer = require('multer');
const path = require('path');
const fs = require('fs')

const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use( "/static", express.static( "static" ) );
app.use(express.urlencoded({extended: true}));
app.use( express.json() );

app.use(session({
    secret : '1234',  //암호화 결정
    resave : false, 
    saveUninitialized : true, //초기화되지 않은 세션을 저장하냐 마냐
}));





const router = require("./routes/ARRoutes");
app.use('/', router);



app.get('*', (req,res) =>{
    res.send("접근할 수 없는 주소입니다.");
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});

