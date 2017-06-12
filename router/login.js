var express=require("express"),
	mysql=require("mysql"),
	app=express(),
	router=express.Router();

	Connection=require("../config/configmysql.js")(mysql)
	router.get("/detil",function(req,res){//输出
		
		 res.render("login")	
	})
	module.exports=router