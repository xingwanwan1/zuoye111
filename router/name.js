var express=require("express"),
	mysql=require("mysql"),
	app=express()
	bodyparser=require("body-parser")
	app.use(bodyparser.urlencoded({extended:false}))
	router=express.Router();

	Connection=require("../config/configmysql.js")(mysql)
			router.get("/name",function(req,res){//挂载
				Connection.query("select * from name",function(err,result){
					res.render("name",{
						name:result

					})
				})
			})
module.exports=router
	