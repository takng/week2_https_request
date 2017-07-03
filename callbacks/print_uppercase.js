// while https is built-in to Node, it is a module, so it must be required

//var https = require('https');                               

// the host can be thought of as the domain name you want to read from,
// and the path is the resource - '/' is the root path, but if you wanted to read a
// particular resource (like '/login/index.html'), that would be defined in the path

function printUpperCase (html) {
  console.log(html.toUpperCase());
}

var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

getHTML(requestOptions, printUpperCase);

