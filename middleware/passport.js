const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")
const User = require("../db/model/User")
exports.localStrategy = new LocalStrategy(async(username, password , done) => {
try {
    const user = await User.findOne({username: username});
    if(user){
       const passwordMath = await bcrypt.compare(password, user.password);
       if(passwordMath){
           return done(null, user)

       }else{
        return   done(null,error);
       }

    }else{
    return    done(null, false);
    }
} catch (error) {
    return done(error)
}
})
