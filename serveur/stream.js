const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.resolve(__dirname,'../.editorconfig'));
rs.pipe(process.stdout);
