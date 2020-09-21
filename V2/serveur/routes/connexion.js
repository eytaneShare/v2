var express = require("express");
var router = express.Router();
 
var getUsers = require('../public/javascripts/found').getUser
router.get("/", function(req, res, next) {

    // ((result) => {
    //   res.send(result)
    // })
    res.send("hi")
  
    
});
router.get('/me', (req, res) => {
    const sess = req.sess;
    if (!sess || sess.isAdmin === false) {
        res.status(403)
    }
    if (sess.email) {
        userData = getUser(sess.email)
        res.send(userData);
    }
})
router.post("/", function(req,res){
    const sess = req.session
    sess.email = req.body.email
    sess.isAdmin = true

    // const user = sess.email
    // if sess.user.admin === true

    // sess.destroy()
    console.log(req.session)
    getUsers((users) => {
        let result = users.find(pro => pro.userName==req.body.userName);
        if (result){
            if (result.password == req.body.password){
                res.status(200).send({
                    message:"ok "
                })  }else{
                    res.status(200).send({
                        message:"incorect password"
                })
    
                }
        }else{
            res.status(200).send({
                message:"user not found"
            })
        }
    })
    
})

module.exports = router;