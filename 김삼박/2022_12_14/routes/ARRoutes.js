var express = require("express");
var controller = require("../controller/ARController");
const router = express.Router();

router.get('/', controller.main);

router.get("/login", controller.login_main);

router.post("/signin", controller.user_login);

router.get('/signup', controller.register);
router.post('/signup', controller.post_signup);

router.post('/check_id', controller.check_id);
router.post('/check_name', controller.check_name);
router.post('/check_mail', controller.check_mail);


router.delete('/logout', controller.user_logout);


module.exports = router;