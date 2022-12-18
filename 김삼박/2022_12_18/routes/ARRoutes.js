var express = require("express");
var controller = require("../controller/ARController");
const router = express.Router();

const multer = require('multer');
const path = require('path');
const fs = require('fs')


router.get('/', controller.main);

router.get("/login", controller.login_main);

router.post("/signin", controller.user_login);

router.get('/signup', controller.register);
router.post('/signup', controller.post_signup);

router.delete('/logout', controller.user_logout);

router.post('/check_id', controller.check_id);
router.post('/check_name', controller.check_name);
router.post('/check_mail', controller.check_mail);

router.get('/Edit_info', controller.Edit_info);
router.patch('/Edit_info_update', controller.Edit_info_update);
router.delete('/user_delete', controller.user_delete);

//프로필 업로드
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'uploads/');
        },
        filename: function (req, file, cb) {
            console.log('아 짜증나ㅠㅠ')
            cb(null, file.originalname);
          }
    // filename( req, file, done ){
    //     console.log( "파일 들어옴? : ", req.body );
    //     const ext = path.extname(file.originalname);
    //     const filename = file.originalname ;
    //     done( null, filename + ext );
    //     console.log('filename');
    // }
})
});


router.get('/mypage', controller.mypage);
router.post('/upload_file', upload.single('img'),controller.upload_file);




module.exports = router;