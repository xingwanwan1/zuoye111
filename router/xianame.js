const express=require("express"),
	mysql=require("mysql"),
	app=express(),
	router=express.Router();
	Connection=require("../config/configmysql.js")(mysql)
	router.get("/xianame",function(req,res){

			res.render("xianame",{
						num:'result'
					})
	})
	module.exports=router

	