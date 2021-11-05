const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

const { createUser, getUserByUserId, getUsers, updateUser, deleteUser, login } = require("./user.controller");

const {
    addUserValidation,
    loginValidation
} = require('../../validation/users/user.validation');

const path = require('path');

router.get("/", checkToken, getUsers);
router.post("/", addUserValidation, createUser);
router.get("/:id", checkToken, getUserByUserId);
router.post("/login", loginValidation, login);
router.patch("/:id", checkToken, updateUser);
router.delete("/:id", checkToken, deleteUser);

module.exports = router;