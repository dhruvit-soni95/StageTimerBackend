create table user(
	id int primary key AUTO_INCREAMENT,
	firstname varchar(250),
	lastname varchar(250),
	contactNumber varchar(20),
	email varchar(50),
	password varchar(250),
	companyassociatedwith varchar(500),
	UNIQUE (email)

);