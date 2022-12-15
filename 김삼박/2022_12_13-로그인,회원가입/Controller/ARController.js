const { AR_LOGIN } = require('../model/ARModel');

//https://codingnewbie.tistory.com/47
exports.login_main = (req, res) => {
    // console.log('메인 페이지 세션 체크: ', req.session.user);
    res.render('login');
}

exports.user_login = (req, res) => {
    AR_LOGIN.findAll({
        where : { id : req.body.id, pw : req.body.pw },
        limit : 1
    }).then((result)=>{
        if( result.length > 0 ){
            // req.session.user = req.body.id;
            console.log('로그인 성공');
            console.log('로그인', '아이디 :', result[0].id,'비번 :', result[0].pw );
            res.send(true);
        }
        else {
            console.log('로그인 실패');
            res.send(false);
        } 
    });
     //let sql = `SELECT * FROM user WHERE id='${id}' and pw='${pw}' limit 1;`;
}

exports.main = (req, res) => {
    res.render('main');
}

exports.register = (req, res) => {
    res.render('signup');
}

exports.post_signup = (req,res) => {
    let data = {
        id : req.body.id,
        name : req.body.name,
        pw : req.body.pw,
        e_mail : req.body.e_mail
    }
    AR_LOGIN.create(data)
    .then((result)=>{
        res.send(true);
    });
    //let sql = `INSERT INTO user(id, name, pw) VALUES('${data.id}','${data.name}','${data.pw}');`;
}