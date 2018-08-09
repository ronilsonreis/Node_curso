
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
        var resutados = connection.query('select * from produtos',function(err,result){
            res.send(result); 
            
        });
        connection.end();
    });

}