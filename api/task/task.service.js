const pool = require("../../config/database");

module.exports = {
    create: (data) => {
        return new Promise((resolve, reject) => {
            pool.query(
                `insert into task(taskTitle, taskDesc, assignedTo, sorting, status) 
                      values(?,?,?,?,?)`,
                [
                    data.taskTitle,
                    data.taskDesc,
                    data.assignedTo,
                    data.sorting,
                    data.status,
                ],
                (error, results) => {
                    if (error) {   
                        return reject(error);
                    }
                    return resolve(results);
                }
            );
        })
    },
    getTask: () => {
        return new Promise((resolve, reject) => {
            pool.query(
                `select id, taskTitle, taskDesc, assignedTo,sorting, status from task`,
                [],
                (error, results, fields) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(results);
                }
            );
        });
    },
    getTaskById: (id) => {
        return new Promise((resolve, reject) => {
            pool.query(
                `select id, taskTitle, taskDesc, assignedTo, sorting, status from task where assignedTo = ?`,
                [id],
                (error, results, fields) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(results);
                }
            );
        })
    },
    getTaskById_Todo: (id) => {
        return new Promise((resolve, reject) => {
            pool.query(
                `select id, taskTitle, taskDesc, assignedTo, sorting, status from task where assignedTo = ? and (status is null or status = 0) order by sorting`,
                [id],
                (error, results, fields) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(results);
                }
            );
        })
    },
    getTaskById_Done: (id) => {
        return new Promise((resolve, reject) => {
            pool.query(
                `select id, taskTitle, taskDesc, assignedTo, sorting, status from task where assignedTo = ? and status = 1 order by sorting`,
                [id],
                (error, results, fields) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(results);
                }
            );
        })
    },
    deleteTask: (id) => {
        return new Promise((resolve, reject) => {
            pool.query(
                `delete from task where id = ?`,
                [id],
                (error, results) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(results);
                }
            );
        })
    },
    updateTask: (id, data) => {
        return new Promise((resolve, reject) => {
            pool.query(
                `update task set taskTitle=?, taskDesc=?, sorting=?, status=? where id = ?`,
                [
                    data.taskTitle,
                    data.taskDesc,
                    data.sorting,
                    data.status,
                    id,
                ],
                (error, results) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(results);
                }
            );
        })
    },
}