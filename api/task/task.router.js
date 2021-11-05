const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

const { create,getTask, getTaskById, deleteTask, getTaskById_Done, getTaskById_Todo, updateTask } = require("./task.controller");

const {
    addTaskValidation
} = require('../../validation/task/task.validation');

const path = require('path');

router.post("/", addTaskValidation, create);
router.get("/", checkToken, getTask);
router.get("/:id", checkToken, getTaskById);
router.get("/todo/:id", checkToken, getTaskById_Todo);
router.get("/done/:id", checkToken, getTaskById_Done);
router.delete("/:id", checkToken, deleteTask);
router.patch("/:id", checkToken, updateTask);

module.exports = router;