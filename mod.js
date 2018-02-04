function mod(req, resp){
    resp.writeHead(200,{
        'Content-type': 'text/html'
    });
    resp,write('<!DOCTYPE "html">');
    resp,write('<html>');
    resp,write('</head><title>Http Module</title></head>');
    resp,write('<body>');
    resp,write('<h1>Hello from http module SON</h1>');
    resp,write('</body>');
    resp,write('</html>');

    resp.end();
}
module.exports = mod;