
module.exports=function(app){
    
    app.get('/produtos',function(req,res){
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '134679',
            database : 'casadocodigo'
        });
        //consulta
        //res.render("produtos/lista");
        var resutados = connection.query('select * from livros',function(err,result){
            
        });
        connection.end();
    });

}