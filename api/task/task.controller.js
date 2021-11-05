const { getTask, getTaskById, create, deleteTask, getTaskById_Done, getTaskById_Todo, updateTask } = require("./task.service");

const { json } = require("express");
const { sign } = require("jsonwebtoken");
const AppError = require("../../utils/appError");

module.exports = {
    create: async (req, res, next) => {
        try {
            const body = req.body;
            const result = await create(body);
            if (!result.affectedRows) {
                throw new Error('Failed! Insert record');
            }
            return res.status(200).json({
                success: 1,
                message: "Task created successfully"
            });
        } catch (e) {
            next(e);
        }
    },
    getTask: async (req, res, next) => {
        try {
            const result = await getTask();
            return res.json({
                success: 1,
                data: result,
            });
        } catch (e) {
            next(e);
        }
    },
    getTaskById: async (req, res, next) => {
        try {
            const id = req.params.id;
            const result = await getTaskById(id);
            if (!result.length) {
                throw new AppError('Record not found!', 404);
            }
            return res.json({
                success: 1,
                data: result,
            });
        } catch (e) {
            next(e);
        }
    },
    getTaskById_Todo: async (req, res, next) => {
        try {
            const id = req.params.id;
            const result = await getTaskById_Todo(id);
            if (!result.length) {
                throw new AppError('Record not found!', 404);
            }
            return res.json({
                success: 1,
                data: result,
            });
        } catch (e) {
            next(e);
        }
    },
    getTaskById_Done: async (req, res, next) => {
        try {
            const id = req.params.id;
            const result = await getTaskById_Done(id);
            if (!result.length) {
                throw new AppError('Record not found!', 404);
            }
            return res.json({
                success: 1,
                data: result,
            });
        } catch (e) {
            next(e);
        }
    },
    deleteTask: async (req, res, next) => {
        try {
            const id = req.params.id;
            const result = await deleteTask(id);
            if (!result.affectedRows) {
                throw new Error(`Failed to delete record!`);
            }
            return res.json({
                success: 1,
                message: "task deleted successfully",
            });
        } catch (e) {
            next(e);
        }
    },
    updateTask: async (req, res, next) => {
        try {
            const id = req.params.id;
            const body = req.body;
            const result = await updateTask(id, body);
            if (!result.affectedRows) {
                throw new Error(`Failed to update record!`);
            }
            return res.json({
                success: 1,
                message: "updated successfully",
            });
        } catch (e) {
            next(e);
        }
    },
}