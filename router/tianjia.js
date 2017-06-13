const express=require("express"),
	mysql=require("mysql"),
	app=express(),
	router=express.Router();
	Connection=require("../config/configmysql.js")(mysql)
	
	router.post("/tianjia",function(req,res){
		console.log(req.body.ID)
		console.log(req.body.name)
		Connection.query("insert into name(ID,name) values('"+req.body.ID+"','"+req.body.name+"')",(err,result)=>{
			res.send({'code':0,'msg':'添加成功'})
			console.log(123)
		})
	})
	module.exports=router