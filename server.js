const path = require('path');
const express = require('express');
const session = require('express-session');


const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret : 'This is my super duper secret',
    cookie: { expires: 600000 }, // session will expire in 10 minutes. 
    resave: false,
    rolling: true,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
app.use(function(req,res,next){
  req.session._garbage = Date();
  req.session.touch();
  next()
})



const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars'); 

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});