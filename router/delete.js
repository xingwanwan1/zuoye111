var express=require("express"),
	mysql=require("mysql"),
	app=express(),
	router=express.Router();
	Connection=require("../config/configmysql.js")(mysql)
	router.post("/delete",function(req,res){
		Connection.query("delete from login where ID=?",[req.body.name],function(err,result){
			res.send({'code':0,'msg':'删除成功'})
		})
	})
	module.exports=router