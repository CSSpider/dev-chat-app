const db = require('./friends-model.js');

// const userTable = `
	// CREATE TABLE users (
	// 	id int NOT NULL GENERATED ALWAYS AS IDENTITY,
	// 	firstname varchar(255) NOT NULL,
	// 	lastname varchar(255) NOT NULL,
	// 	username varchar(255) NOT NULL UNIQUE,
	// 	password varchar(255) NOT NULL,
	// 	email varchar(255) NOT NULL UNIQUE,
	// 	PRIMARY KEY (id)
	// 	);
// 	`

const testInsertUserQuery = `
	INSERT INTO users (firstname, lastname, username, password, email)
 	VALUES ('im', 'admin', 'admin', 'admin', 'admin@gmail.com');
	`

const selectQuery= `
	SELECT * FROM users;
	`

db.query(testInsertUserQuery)
	.then(data => console.log(data))
	.catch(err => console.log(err))

// db.query(selectQuery)
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err))

db
  .query('SELECT * FROM users')
  .then((res) => console.log('user:', res.rows[0]))