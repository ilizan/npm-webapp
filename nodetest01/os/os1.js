const os = require('os');

console.log(os.EOL)
console.log(os.arch())
//console.log(os.constants)
//console.log(os.cpus())
console.log(os.endianness())
for(var i= 0;i<10;i++){
    console.log(os.freemem());
}