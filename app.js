var app = require('./config/express')();
var ratasProdutos = require('./app/routes/produtos')(app);

app.listen(3000,function(){
    console.log("Server UP!!")

});



