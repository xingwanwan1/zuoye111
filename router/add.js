var express=require("express"),
	mysql=require("mysql"),
	app=express(),
	router=express.Router();
	Connection=require("../config/configmysql.js")(mysql)

	router.post("/add",function(req,res){
		Connection.query("insert into login(ID,username,password) values('"+req.body.ID+"','"+req.body.username+"','"+req.body.password+"'')",function(err,result){
			res.send({'code':0,'msg':'添加成功'})
			console.log(123)
		})
	})
	module.exports=router