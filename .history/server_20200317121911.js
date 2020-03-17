const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();
const multer = require('multer');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Sequelize = require ('sequelize');
var PORT = process.env.PORT || 8080;

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: email }, function(err, user) {
      if (err) { return done(err); }
      if (!email) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!email.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      if (username == process.env.admin && password == process.env.admin){
        return done(null, username)
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + 'public/uploads/')},
});

const checkFileType = function(file,cb){
    console.log('testing file');
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase);
    const checkMimeType = filetypes.test(file.mimetype);
    if(checkMimeType && extname){
        return cb(null, true);
    } else {
        cb('Error: Images Only');
    }
}

const upload = multer({
    storage: storage,
    limits: {filesize:1000000},
    onFileUploadStart: function (file) {
        console.log(file.originalname + ' is starting ...')
      },
    filefilter: function(req,file,cb){
        checkFileType(file, cb);
    }
}).any('test');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });


require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

app.post('/upload', function(req,res){
    upload(req, res, function(err) {
        console.log(req);
        if(err){
            res.send('index', {
                msg: err
            });
        } else { 
            res.send("success");
        }
    })
});

const db = require('./models');

db.sequelize.sync().then(function() {
    app.listen(PORT, function(){
        console.log("Listening on Port: "+ PORT);
    });
});


