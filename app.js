require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const taskRouter = require("./api/task/task.router");
//const multer = require("multer");
const cors = require("cors");
const AppError = require("./utils/appError");
// it will parse the body data
app.use(cors());
app.use(express.json());

// main routing
app.use("/public", express.static("public"));
app.use("/api/users", userRouter);
app.use("/api/task", taskRouter);



app.all('*', (req, res, next) => {
  throw new AppError(`Requested URL ${req.path} not found!`, 404);
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(200).json({
    success: 0,
    message: err.message,
    stack: err.stack
  })
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server up and running ${port}`);
});