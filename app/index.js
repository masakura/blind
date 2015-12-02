const database = require('./lib/database');
const server = require('./lib/server');

database.setup();
console.log('database setup finish');

server(database).listen(3000);
console.log('run app http://localhost:3000');
