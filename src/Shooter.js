const http = require('http');
const querystring = require('querystring');

module.exports.fire = (postData, options, cb) => {
   var req = http.request(options, (res) => {
      res.setEncoding('utf8');
   });

   req.on('error', (e) => {
      console.log(e);
      console.log(`problem with request: ${e.message}`);
   });

   req.write(querystring.stringify(postData));
   req.end();
   cb();
}
