var express = require("express");
var controller = require("../controller/ARController");
const router = express.Router();

const multer = require('multer');
const path = require('path');
const fs = require('fs')

// 메인 페이지 및 세션 체크
router.get('/', controller.main);

// 로그인 and 회원가입 페이지
router.get("/login", controller.login_main);
router.post("/signin", controller.user_login);
router.get('/signup', controller.register);
router.post('/signup', controller.post_signup);

// 로그아웃
router.delete('/logout', controller.user_logout);

// 회원가입 중복 검사
router.post('/check_id', controller.check_id);
router.post('/check_name', controller.check_name);
router.post('/check_mail', controller.check_mail);

// 개인정보 수정
router.get('/Edit_info', controller.Edit_info);
router.patch('/Edit_info_update', controller.Edit_info_update);

// 회원 탈퇴
router.delete('/user_delete', controller.user_delete);

//프로필 업로드
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'static/uploads/');
    },
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, req.session.user + ext);
    }
  })
});

router.get('/mypage', controller.mypage);
router.post('/upload_file', upload.single('img'), controller.upload_file);




module.exports = router;