const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require("body-parser");
const connect = require('./utils/db')
const dbConfig = require('./config/db.config')

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./routes/test.routes')(app)
require('./routes/auth.routes')(app)
require('./routes/user.routes')(app)

connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`)
  .then(() => app.listen(5000, () => {
    console.log('server on http://localhost:5000')
  }))
  .catch(e => console.error(e))


 app.get('/user/:id', async (req, res) => {
  res.send('hello')
}) ;

 app.get('/signup', async (req, res) => {
  try {
    res.status(200).json(await User.find({}).lean().exec())
  } catch(e) {
    console.error('ERROR',e)
    res.status(500).send()
  }
}) ;

 app.post('/user', async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.create({ email, password })
    res.status(200).json(user)
  } catch(e) {
    res.status(500).send()
  }
});

