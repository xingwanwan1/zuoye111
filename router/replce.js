/*var express=require("express"),
	mysql=require("mysql"),
	app=express(),
	router=express.Router();

	Connection=require("../config/configmysql.js")(mysql)
	router.post("/repalce",function(req,res){
		Connection.query("update admin set ID=?,username=?,password=? where ID=?,username=?,password=?",["'+req.body.ID+'","'+req.body.username+'","'+req.body.password+'","id","user","psd"],function(err,result){
			console.log(result)

		})
	})
	module.exports=router*/