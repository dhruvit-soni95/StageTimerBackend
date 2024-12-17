const mysql = require('mysql');
require('dotenv').config();
const fs = require('fs');

var connection = mysql.createConnection({
	port: process.env.DB_PORT,
	host: process.env.DB_HOST,
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	multipleStatements: true
});

	// ssl:{ca:fs.readFileSync("./DigiCertGlobalRootCA.crt.pem")},

connection.connect((err) => {
	if(!err){
		console.log("Connected");
	}else{
		console.log(err);
	}
});

module.exports = connection;