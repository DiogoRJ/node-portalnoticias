module.exports = function(app){
    app.get('/form_add_noticia', function(req, res){
        app.app.controllers.admin.form_inclusao_noticia(app, req, res); 
    });

    app.post('/form_add_noticia', function(req, res){
        app.app.controllers.admin.salvar_noticias(app, req, res);         
    });
}
