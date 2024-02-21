const express = require('express');
const { registerUser, loginUser, updateUser, deleteUser, getUserid, getUser } = require('../controllers/UserController');
const router=express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/update/:id").put(updateUser);
router.route("/delete/:id").delete(deleteUser);
router.route("/getUser/:id").get(getUserid);
router.route("/getUser").get(getUser);

module.exports=router;


