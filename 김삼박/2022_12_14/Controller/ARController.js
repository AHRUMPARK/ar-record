const { AR_LOGIN } = require('../model/ARModel');


//메인 페이지
exports.main = (req, res) => {
    console.log('메인 페이지 세션 체크: ', req.session.user);
    if(req.session.user){
        res.render("main", { isLogin : true, id : req.session.user });
    }  else {
        res.render("main", { isLogin : false });
    }
};

//로그인 페이지 랜더
exports.login_main = (req, res) => {
    // console.log('메인 페이지 세션 체크: ', req.session.user);
    res.render('login');
}

//로그인 기능
exports.user_login = (req, res) => {
    AR_LOGIN.findAll({
        where : { id : req.body.id, pw : req.body.pw },
        limit : 1
    }) 
        .then((result)=>{   
            console.log(result);
            if( result.length > 0 ){
                req.session.user = req.body.id;
                console.log( '세션 : ', req.session);
                res.send(true);
            }
            else {
                console.log('로그인 실패');
                res.send(false);
            } 
        })
     //let sql = `SELECT * FROM user WHERE id='${id}' and pw='${pw}' limit 1;`;
}


//회원가입 페이지
exports.register = (req, res) => {
    res.render('signup');
}

//아이디 중복 체크
exports.check_id = async(req, res) => {
    console.log('중복체크 테스트, 아이디');
    let result = await AR_LOGIN.findOne({
        where : { id : req.body.id }
    });

    if ( result != null ){
        //중복된 값이 있으면 true
        res.send (true);
    } else {
        res.send (false);
    };
}

//닉네임 중복 체크
exports.check_name = async(req, res) => {
    console.log('중복체크 테스트, 닉네임');
    console.log(req.body);
    let result = await AR_LOGIN.findOne({
        where : { name : req.body.name }
    });

    if ( result != null ) res.send(true);
    else res.send(false);
}



//이메일 중복 체크
exports.check_mail = async(req, res) => {
    console.log('중복체크 테스트, 이메일');
    let result = await AR_LOGIN.findOne({
        where : { e_mail : req.body.e_mail },
    });
    if ( result != null ){
        //중복된 이메일 ture
        res.send (true);
    } else {
        res.send (false);
    };
}


//회원가입 기능
exports.post_signup = (req,res) => {
    let data = {
        id : req.body.id,
        name : req.body.name,
        pw : req.body.pw,
        e_mail : req.body.e_mail
    };
    AR_LOGIN.create(data)
    .then((result)=>{
        res.send(true);
    });
    //let sql = `INSERT INTO user(id, name, pw) VALUES('${data.id}','${data.name}','${data.pw}');`;
}

//로그아웃
exports.user_logout = (req, res) => {
    req.session.destroy(function (err){
        if(err) throw err ;
        res.send(true);
    });
};