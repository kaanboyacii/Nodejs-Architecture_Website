const { response } = require('express');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/shop')

const errorController = require('./controllers/error');


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
//Routes
app.use('/admin',adminRoutes);
app.use(userRoutes);


app.use(errorController.get404Page);

app.listen(3000, ()=> {
    console.log('listening on port 3000')
});