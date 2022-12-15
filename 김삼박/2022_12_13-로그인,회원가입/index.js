const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use( "/static", express.static( "static" ) );
app.use(express.urlencoded({extended: true}));
app.use( express.json() );

const router = require("./routes/ARRoutes");
app.use('/', router);

// app.use(session({
//     secret : '1234' ,  //암호화 결정
//     resave : false, 
//     saveUninitialized : true, //초기화되지 않은 세션을 저장하냐 마냐
//     secure : true //https(보안서버), true : 보안서버에서만 작동
// }));

app.get('*', (req,res) =>{
    res.send("접근할 수 없는 주소입니다.");
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});

