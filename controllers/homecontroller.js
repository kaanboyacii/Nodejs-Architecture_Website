exports.getIndex = (req, res, next) => {
    res.render('index',{title: 'HomePage'});
}
exports.getAboutPage = (req, res, next) => {
    res.render('about',{title: 'About Page'});
}
exports.getProjectPage = (req, res, next) => {
    res.render('about',{title: 'About Page'});
}