var http = require('http');

callback = function(response) {


  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
}

var server = http.createServer(function (request, response) {
    response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8181');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    response.setHeader('Access-Control-Allow-Credentials', true);
    response.writeHead(200, {'Content-Type': 'application/json'});

    var query = request.url.replace('/?', '');
    var options = {
        host: "lifeisfeudal.com",
        port: 80,
        path: '/billing/service-gmcommands.php?action=getItems&' + query,
        method: 'GET'
    };
    http.request(options, function(REST_call) {
        var body = '';
        REST_call.setEncoding('utf8');
        REST_call.on('data', function (chunk) {
            body += chunk;
        });
        REST_call.on('end', function () {
            response.end(body);
        });
    }).end();
})

server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
