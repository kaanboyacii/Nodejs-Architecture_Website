const { response } = require('express');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

const Routes = require('./routes/routes')


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

//Routes
app.use(Routes);

app.listen(3000, ()=> {
    console.log('listening on port 3000')
});