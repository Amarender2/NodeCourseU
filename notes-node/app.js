console.log('Starting Program');

const fs  = require('fs');
const os = require('os');

fs.appendFileSync('greetings.txt', 'Hello Amar...');

var user = os.userInfo();
console.log(user.username);
