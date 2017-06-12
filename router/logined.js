var express=require("express"),
	mysql=require("mysql"),
	app=express(),
	router=express.Router();
	Connection=require("../config/configmysql.js")(mysql)
	router.post("/logined",function(req,res){//注册
		Connection.query("select ID,username,password from login where username=? and password=?",[req.body.username,req.body.password],function(err,result){
					if(result.length>0){
						res.send("hello")
					}else{
						res.send("error")
					}		
		})
	})
	module.exports=router