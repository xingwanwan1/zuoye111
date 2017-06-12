var express=require("express"),
	mysql=require("mysql"),
	app=express()
	bodyparser=require("body-parser")
	app.use(bodyparser.urlencoded({extended:false}))
	router=express.Router();

	Connection=require("../config/configmysql.js")(mysql)
			router.get("/index",function(req,res){//挂载
				Connection.query("select * from login",function(err,result){
					res.render("index",{
						num:result

					})
				})
			})
module.exports=router
	