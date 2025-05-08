exports.paginaInicial = (req, res) => {
    req.flash('info', 'Olá mundo');
    res.render('index', {
        titulo: 'Este será o título da página'
    });
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};