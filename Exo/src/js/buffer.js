const fs = require('fs');
const path = require('path');

fs.readFile(path.resolve(__dirname,'../.editorconfig'), (err, buf) =>{
	console.log(buf.toString());
});
