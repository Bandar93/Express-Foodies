const express = require("express")
const connectDB = require("./database")
const userRoutes = require("./apis/users/users.routes");
const app = express();

connectDB();
app.use("/apis", userRoutes);


const PORT = 8000;
app.listen(PORT,() => console.log(`its working ${PORT}`))