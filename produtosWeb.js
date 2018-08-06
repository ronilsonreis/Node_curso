var http = require('http');

http.createServer(function(request,response) {
    if(request.url == "/produtos"){

        response.end("<html><body><h1>Listando os Produtos da loja</h1></body></html>");    

    }else {

        response.end("<html><body><h1>Home da casa do Codigo</h1></body></html>");
    }
    
}).listen(3000,"localhost");

console.log('Servidor Ativado e executando')
