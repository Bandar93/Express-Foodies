const express = require("express");
const connectDB = require("./database");
const cors = require("cors");
const path = require("path");
const userRoutes = require("./apis/users/users.routes");
const cuisineRoutes = require("./apis/cuisines/cuisines.routes");
const recipesRoutes = require("./apis/recipes/recipes.routes")
const { localStrategy, jwtStrategy } = require("./middleware/passport");
const app = express();

const passport = require("passport")
const morgan = require('morgan');
const logger = require("./middleware/logger")



// Image Handling



// DB
connectDB();

// Middleware

app.use(express.json())
app.use(morgan("dev"));
app.use(logger);
app.use(cors())



// Passport
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

// Routes
app.use("/api", userRoutes);
app.use("/api", cuisineRoutes);
app.use("/api",recipesRoutes);
app.use("/media", express.static(path.join(__dirname, "media")));


const PORT = 8000;
app.listen(PORT, () => console.log(`its working ${PORT}`));
