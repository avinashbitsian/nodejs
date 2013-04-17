
function route(pathname,username) {
  console.log("About to route a request for " + pathname);

var mysql = require('mysql');
var str=pathname.substring(1);
var result;
var connection = mysql.createConnection({
host : 'localhost',
user : username,
password : 'bazinga420',
});

connection.connect();

console.log("connected.");
connection.query('use openmrs', function(err, rows, fields) {
if (err) throw err;

//console.log('Query result: ', rows);
});
connection.query('SELECT person_name.given_name, person.gender, person_address.address1 FROM person, person_name, person_address WHERE person.person_id=person_name.person_id AND person.person_id=person_address.person_id AND person_name.given_name like \'%'+str+'%\'', function(err, rows, fields) {
if (err) throw err;

console.log('Query result: ', rows);

});


connection.end();

}

exports.route = route;
