const express = require("express")
const connectDB = require("./database")
const userRoutes = require("./apis/users/users.routes");
const {localStrategy} = require("./middleware/passport")
const app = express();
const passport = require("passport")


// DB
connectDB();

// Middleware
app.use(express.json())

// Passport
app.use(passport.initialize());
passport.use(localStrategy);

// Routes
app.use("/api", userRoutes);


const PORT = 8000;
app.listen(PORT,() => console.log(`its working ${PORT}`))