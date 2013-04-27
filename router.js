function route(values,username,pass) {
console.log("About to route a request for " + values);
var mysql = require('mysql');
var crypto = require('crypto');
var str=values;
var hashed='';
var authenticated= new Boolean();

var connection = mysql.createConnection({
host : 'localhost',
user : 'root',
password : 'bazinga420',
});

connection.connect();

console.log("connected.");


connection.query('use openmrs', function(err, rows, fields) {
if (err) throw err;

//console.log('Query result: ', rows);
});


connection.query('SELECT salt FROM users WHERE system_id = \''+username+'\'', function(err, rows, fields) {
if (err) throw err;
pass+=JSON.stringify(rows).substring(10,JSON.stringify(rows).length-3);
console.log('password is ' + pass);
hashed += crypto.createHash('sha512').update(pass).digest('hex');
console.log('hashed password is ' +hashed);
});



connection.query('SELECT password FROM users WHERE system_id = \''+username+'\'', function(err, rows, fields) {
  if (err) throw err;
//	console.log('database password is ' + JSON.stringify(rows).substring(14,JSON.stringify(rows).length-3));
	if(JSON.stringify(rows).substring(14,JSON.stringify(rows).length-3)==hashed){
		authenticated=true;
	}
});

if (authenticated){
	connection.query('SELECT person_name.given_name, person.gender, person_address.address1 FROM person, person_name, person_address WHERE person.person_id=person_name.person_id AND person.person_id=person_address.person_id AND person_name.given_name like \'%'+str+'%\'', function(err, rows, fields) {
	if (err) throw err;

	console.log('Query result: ', rows);

	});


	connection.end();
}
}

exports.route = route;
