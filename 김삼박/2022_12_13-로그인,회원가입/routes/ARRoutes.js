var express = require("express");
var controller = require("../controller/ARController");
const router = express.Router();

router.get("/", controller.login_main);

router.post("/signin", controller.user_login);

router.get('/main', controller.main);

router.get('/signup', controller.register);
router.post('/signup', controller.post_signup);


module.exports = router;