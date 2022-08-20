exports.getIndex = (req, res, next) => {
    res.render('index',{title: 'İz Mimarlık'});
}
exports.getAboutPage = (req, res, next) => {
    res.render('about',{title: 'Hakkımızda'});
}
exports.getProjectPage = (req, res, next) => {
    res.render('projects',{title: 'Projelerimiz'});
}