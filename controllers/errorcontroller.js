exports.get404Page = (req,res,next) => {
    res.status(404).render('error',{title: 'Hata ! Sayfa Bulunamadı'});
}