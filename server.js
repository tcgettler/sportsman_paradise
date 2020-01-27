const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();
const multer = require('multer');

var PORT = process.env.PORT || 8080;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/')
    },
    filename: function(req, file, cb){
        console.log("aha " + file.originalname);
        cb(null, file.originalname);
    }
});

const checkFileType = function(file,cb){
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase);
    const checkMimeType = filetypes.test(file.mimetype);
    if(checkMimeType && extname){
        return cb(null, true);
    } else {
        cb('Error: Images Only');
    }
}
app.use(multer({
    storage:storage
    }).single('file'));
const upload = multer({
    storage: storage,
    limits: {filesize:1000000},
    filefilter: function(req,file,cb){
        checkFileType(file, cb);
    }
}).single('upload_image');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/upload', function(req,res ){
    upload(req, res, (err) => {
        if(err){
            res.render('index', {
                msg: err
            });
        } else { 
            res.send("success");
        }
    })
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });


require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

const db = require('./models');

db.sequelize.sync().then(function() {
    app.listen(PORT, function(){
        console.log("Listening on Port: "+ PORT);
    });
});


