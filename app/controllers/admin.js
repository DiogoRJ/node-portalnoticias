module.exports.form_inclusao_noticia = function(app, req, res){
    res.render("admin/form_add_noticia", {validacao:{}, noticia:{}});

}

module.exports.salvar_noticias = function(app, req, res){

    var noticia = req.body;

    req.assert('titulo','Título é obrigatorio').notEmpty();
    req.assert('resumo','Resumo é obrigatorio').notEmpty();
    req.assert('resumo','Resumo deve conter entre 5 e 200 caracteres').len(5, 200);
    req.assert('autor','Autor é obrigatorio').notEmpty();
    req.assert('data_noticia','Data é obrigatorio').notEmpty().isDate({format: 'DD-MM-YYYY'});
    req.assert('noticia','Notícia é obrigatoria').notEmpty();
    req.assert('pw','Chave válida é obrigatoria').len(1, 64);
    
    var erros = req.validationErrors();

    if(erros){
        res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
        return;
    }

    //conexao
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function(error, result){
        res.redirect('/noticias');
    //model
    
    //salvarNoticia
    });

}