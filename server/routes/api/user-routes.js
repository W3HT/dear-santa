const router = require("express").Router();
const {
  signup,
  login,
  logout, 
  me
} = require("../../controllers/user-controller");

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/me").get(me);

module.exports = router;