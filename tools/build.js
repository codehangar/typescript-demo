console.log('build')

const fs = require('fs');

// Create dist directory if not exists
if (!fs.existsSync('./dist/')){
    fs.mkdirSync('./dist/');
}

// Copy index.html to dist directory
fs.createReadStream('./src/index.html').pipe(fs.createWriteStream('./dist/index.html'));

// Build with webpack
const spawn = require('child_process').spawn;
const child = spawn('webpack', ['--colors']);
child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);

module.exports = child;
