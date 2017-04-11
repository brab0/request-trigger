const http = require('http');

module.exports.fire = (postData, options, cb) => {

   var req = http.request(options, (res) => {
        res.setEncoding('utf8');

        res.on('data', (e) => {
            console.log(e.toString())
        })
   });
   
   req.on('error', (e) => {
      console.log(e);
      console.log(`problem with request: ${e.message}`);
   });

   req.write(JSON.stringify(postData));
   req.end();
   cb();

}
