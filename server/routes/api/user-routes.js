const router = require("express").Router();
const {
  signup,
  login,
  logout
} = require("../../controllers/user-controller");

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").post(logout);

module.exports = router;