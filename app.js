const express = require("express");
const connectDB = require("./database");
const cors = require("cors");
const path = require("path");
const userRoutes = require("./apis/users/users.routes");
const cuisineRoutes = require("./apis/cuisines/cuisines.routes");
const { localStrategy } = require("./middleware/passport");
const app = express();
const passport = require("passport");

// Image Handling

app.use(cors());

// DB
connectDB();

// Middleware
app.use(express.json());

// Passport
app.use(passport.initialize());
passport.use(localStrategy);
// passport.use(jwtStrategy)

// Routes
app.use("/api", userRoutes);
app.use("/api", cuisineRoutes);
app.use("/media", express.static(path.join(__dirname, "media")));

const PORT = 8000;
app.listen(PORT, () => console.log(`its working ${PORT}`));
