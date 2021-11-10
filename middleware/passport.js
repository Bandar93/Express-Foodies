const LocalStrategy = require("passport-local").Strategy
const JWTStrategy = require("passport-jwt").Strategy
const {fromAuthHeaderAsBearerToken} = require("passport-jwt").ExtractJwt
const bcrypt = require("bcrypt")
const User = require("../db/model/User")

const {JWT_SECRET} = require("../config/keys")

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

exports.jwtStrategy = new JWTStrategy({
jwtFromRequest: fromAuthHeaderAsBearerToken(),
secretOrKey: JWT_SECRET,
},
 async (payload, done) => {
     console.log(payload);
    if(Date.now() > payload.exp){
        return done(null, false);
    }
    try {
        const user = await User.findById(payload._id);
        return done(null,user);
    } catch (error) {
        done(error)
    }


}
);