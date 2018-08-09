
module.exports=function(app){
    
    app.get('/produtos',function(req,res){
        //infra estrutura
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '134679',
            database : 'casadocodigo'
        });
        //consulta
        //res.render("produtos/lista");
        var resutados = connection.query('select * from produtos',function(err,results){
            res.render('./produtos/lista',{lista:results}); 
            
        });
        connection.end();
    });

}