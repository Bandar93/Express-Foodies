const User = require("../../db/model/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {JWT_SECRET,JWT_EXPIRATION_MS} = require("../../config/keys")


exports.signup = async (req, res, next) => {
    try {
        const saltRounds = 10;
      
      const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
      req.body.password = hashPassword


      const newUser = await User.create(req.body);

      const payload = {
          _id: newUser._id ,
          username: newUser.username,
          exp: Date.now() + JWT_EXPIRATION_MS
      };
      const token = jwt.sign(payload, JWT_SECRET);



      
      res.status(201).json({ token });
      
    } catch (error) {
      next(error);
    }
  };

  exports.signin = (req,res,next) => {
    const payload = {
        _id: req.user._id ,
        username: req.user.username,
        exp: Date.now() + JWT_EXPIRATION_MS
    };
    const token = jwt.sign(payload, JWT_SECRET);
    res.json({ token })

  };