const db = require('./database.js');

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

const messagesTable = `
CREATE TABLE messages (
	_id int NOT NULL GENERATED ALWAYS AS IDENTITY,
	sender varchar NOT NULL,
	receiver varchar(255) NOT NULL,
	body varchar(255) NOT NULL,
	date TIMESTAMP NOT NULL DEFAULT current_timestamp,
	PRIMARY KEY (_id)
	);
`
// const testInsertUserQuery = `
// 	INSERT INTO users (firstname, lastname, username, password, email)
//  	VALUES ('im', 'admin', 'admin', 'admin', 'admin@gmail.com');
// 	`

const testInsertUserQuery = `
	INSERT INTO messages (sender, receiver, body)
	VALUES ('hello', 'hello', 'it is me');
	`

const queryDynamicInsert = `
	INSERT INTO users (firstname, lastname, username, password, email)
	VALUES ($1, $2, $3, $4, $5);`

db.query(testInsertUserQuery)
	.then(data => console.log(data))
	.catch(err => console.log(err))

// db.query('SELECT * FROM users')
// 	.then((res) => console.log('user:', res.rows[0]))

// const selectPasswordQuery= `
// 	SELECT password FROM users WHERE username='admin';
// 	`

// db.query(selectPasswordQuery)
// 	.then(res => console.log(res.rows[0]))

