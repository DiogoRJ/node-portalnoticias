var mysql = require('mysql');    

//variavel para conexão com bd
var connMysql = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345',
        database: 'portal_noticias'
});
}

module.exports = function(){
    return connMysql;
}