const os = require('os');
var http = require('http')
var path = require('path')
var url = require('url')
var fs = require('fs')

  var theServer=http.createServer(function (request, response) {
     try {
       var requestUrl = url.parse(request.url);
           //console.dir("requestUrl "+requestUrl);

       var resourcePath=path.normalize(requestUrl.pathname);
       //const contentType = request.getHeader('Content-Type');
        //console.dir("contentType "+contentType);
           if(resourcePath.endsWith("./antlr4/index.js"))console.dir("resourcePath "+resourcePath);
      /*if(resourcePath.endsWith("primary-disk.scad")){
         var filePath = "/home/roger/NodeProjects/cam-io/test/examples/primary-disk.scad";
         //console.dir(filePath);
         response.writeHead(200)
         var fileStream = fs.createReadStream(filePath)
         fileStream.pipe(response)
         fileStream.on('error',function(e) {
             response.writeHead(404)     // assume the file doesn't exist
             response.end()
         })
         
       }
       else*/
       {
           //console.dir("resourcePath "+resourcePath);
         var filePath = __dirname+""+resourcePath;
         //console.dir("filePath "+filePath);
         
         if(resourcePath==="/"){
            filePath = __dirname+"/index.html";
           
         }
         else if(fs.existsSync(filePath)){
             
         }
         else if (fs.existsSync(filePath+".html")){
             filePath+=".html";
         }
         else if (fs.existsSync(filePath+".js")){
             filePath+=".js";
         }
         else if (fs.existsSync(filePath+".css")){
             filePath+=".css";
         }
         else if (fs.existsSync(filePath+".tokkens")){
             filePath+=".tokens";
         }
         
         if(filePath.endsWith(".js")){
            response.writeHead(200, { 'Content-Type': 'text/javascript' })
             
         }
         else if(filePath.endsWith(".json")){
            response.writeHead(200, { 'Content-Type': 'application/json' })
             
         }
         else if(filePath.endsWith(".css")){
            response.writeHead(200, { 'Content-Type': 'text/css' })
             
         }
         else if(filePath.endsWith(".tokens")){
            response.writeHead(200, { 'Content-Type': 'text/plain' })
             
         }
         else{
            response.writeHead(200)
         }
         var fileStream = fs.createReadStream(filePath)
         fileStream.pipe(response)
         fileStream.on('error',function(e) {
             response.writeHead(404)     // assume the file doesn't exist
             response.end()
         })
       }
     } catch(e) {
       console.dir("e: "+e);
       response.writeHead(500)
       response.end()     // end the response so browsers don't hang
       console.log(e.stack)
     }
  });
  theServer.on('clientError', (err, socket) => {
    console.dir("client err: "+err);
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
  });  
  theServer.on('close', function () { console.dir("the server closed ")});
  theServer.on('open', function () { console.dir("listening on 8888 ")});
  var PORT=8888;
  theServer.listen(PORT, os.hostname(), 511, function(){
    console.log( "Server listening on port:%s of %s", PORT, os.hostname() );
});
