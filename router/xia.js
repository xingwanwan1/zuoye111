const express=require("express"),
	mysql=require("mysql"),
	app=express(),
	router=express.Router();
	Connection=require("../config/configmysql.js")(mysql)
	router.post("/xia",function(req,res){
		Connection.query("select * from xia where ID=?",[req.body.ID],function(err,result){
			console.log(result)
			if(result.length>0){
				return res.send(result)
			}
			
			
		})
	})
	module.exports=router

	