// importing express
const express = require("express");

// importing User Router
const userRouter = require("./routers/userRouter");

// import florist Router
const floristRouter = require("./routers/floristRouter");

// import flower Router
const flowerRouter = require("./routers/flowerRouter");

// initialize express app
const app = express();

// define the port
const port = 5000;

// import cors library
const cors = require("cors");
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

// this will parse the json data sent from client
app.use(express.json());
app.use(express.static('./static'));
// middleware
app.use("/user", userRouter);

//app.use("/florist", floristRouter);

app.use("/florist", floristRouter);

app.use("/flower", flowerRouter);

// Route
app.get("/", (req, res) => {
  console.log("request on /");
  res.send("response from server");
});

// endpoints or route
app.get("/add", (req, res) => {
  console.log("request on /add");
  res.send("your data has been added!!");
});

// Run the Server
app.listen(port, () => {
  console.log("server started on 5000");
});
