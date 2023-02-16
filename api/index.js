const express = require("express");
const cookieParser = require("cookie-parser");
const AuthRoutes = require("./routes/auth.js");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/auth", AuthRoutes);
app.get("/hello", (req, res) => res.send("Hello LuLuMedic!"));
app.listen(8800, () => {
  console.log("Connected!");
});
