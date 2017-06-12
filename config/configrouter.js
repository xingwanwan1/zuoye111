index=require("../router/index.js")
detil=require("../router/login.js")
logined=require("../router/logined.js")
deletes=require("../router/delete.js")
add=require("../router/add.js")
name=require("../router/name.js")
xia=require("../router/xia.js")
 xianame=require("../router/xianame.js")
tianjia=require("../router/tianjia.js")

//repalce=require("../router/replce.js")
module.exports=function(app){
	app.get("/index",index)
	app.get("/name",name)
	app.get("/detil",detil)
	 app.get("/xianame",xianame)
	app.post("/tianjia",tianjia)
	app.post("/logined",logined)
	app.post("/delete",deletes)
	app.post("/add",add)
	app.post("/xia",xia)
	//app.post("/repalce",repalce)
}

	