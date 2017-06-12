
name=require("../router/name.js")
xia=require("../router/xia.js")
 xianame=require("../router/xianame.js")
tianjia=require("../router/tianjia.js")

module.exports=function(app){
	app.get("/name",name)
	 app.get("/xianame",xianame)
	app.post("/tianjia",tianjia)
	app.post("/xia",xia)
	//app.post("/repalce",repalce)
}

	