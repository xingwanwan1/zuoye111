var express=require("express"),
	app=express(),
	bodyparser=require("body-parser");
	app.use(bodyparser.urlencoded({extended:false}))
	mysql=require("mysql");

	app.set("views",__dirname+"/views")
	app.set("view engine","ejs")

	require("./config/configrouter.js")(app)
	app.use(express.static("./satic"))
	//Connection.end()//关闭数据库
	app.listen(5002,function(){
		console.log(123)	
	})
	