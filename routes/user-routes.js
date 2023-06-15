const express = require("express");
const  controllers  = require("../controllers/user-controller");
// const {getAllUser,signup,login} = controllers;
const router=express.Router();

router.get("/",controllers.getAllUser);
router.post("/signup",controllers.signup);
router.post("/login",controllers.login)

module.exports = router;
