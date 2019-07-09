var http 	= require('http');
var fs 		= require('fs');
var port 	= "3000" ;

http.createServer(function(request, response) {
 
    response.writeHead(200, {
        'Content-Type': 'text/json',
		'Access-Control-Allow-Origin': '*',
		'X-Powered-By':'nodejs'
    });


    fs.readFile('json_demo.txt', function(err, content){
        response.write(content);
        response.end();
    });

}).listen(port);
