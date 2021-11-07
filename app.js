const express = require("express")
const connectDB = require("./database")
const userRoutes = require("./apis/users/users.routes");
const app = express();
app.use(express.json())
connectDB();
app.use("/api", userRoutes);


const PORT = 8000;
app.listen(PORT,() => console.log(`its working ${PORT}`))