module.exports=function(mysql){
	var Connection=mysql.createConnection({
				host:"127.0.0.1",//在没网的情况下用
				//port:3306,
				user:"root",
				password:"root",
				database:"admin"
		})

		Connection.connect()
		return Connection
	}
	