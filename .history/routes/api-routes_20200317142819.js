const db = require('../models');
const hasWindow = typeof window==='undefined' ? false : true
var passport = require('passport');
// if (hasWindow) {
//     window.pss = passport;
// };
// console.log('fuckface')
module.exports = function(app){
    app.post('/login',
    passport.authenticate('local'),
    function (req, res) {
      res.json({
        user: req.username,
        posting: "fuck",
        success: true
      });
    });

    app.get('/api/games', function(req,res){
        db.Games.findAll({}).then(function(rows){
            res.json(rows);
        }).catch(function(err){
            res.json({error: err});
        });
    });

    app.get('/api/games/closed', function(req,res){
        db.Games.findAll({ where: { active: false }})
        .then(function(rows){
            res.json(rows);
        }).catch(function(err){
            res.json({error: err});
        });
    });


    app.get('/api/games/:id', function(req, res) {
        db.Product.find({ where: { id: req.params.id }})
          .then(function(data){
            res.json(data);
          }).catch(function(error) {
            res.json({ error: error });
          });
    });
    
    app.put('/api/games/:id', function(req, res){
        console.log(req.params.id, req.body);
       db.Product.update({stock_quantity: parseInt(req.body.stock_quantity)}, {where: {id: parseInt(req.params.id)}})
            .then(function(response){
                res.json(response);
            });
    });
 
    app.post('/games/create', function(req, res) {
        db.Games.create({
          game_name: req.body.game_name,
          price: parseInt(req.body.price),
          description: req.body.description,
          image_location: req.body.image_location,
          active: req.body.active
        }).then(function(response){
            res.json({success: 'success', id: JSON.parse(response.id)});
        });
    });

    app.get('/api/seats/:id', function(req, res){
        db.Seats.findAll({ where: {GameId: parseInt(req.params.id)}})
        .then(function(response){
        res.json(response);
        });
    })

    app.post('/user/create', function(req, res){
        console.log(req.body);
        db.User.create({
            user_fname: req.body.user_fname,
            user_lname: req.body.user_lname,
            address: req.body.address,
            address2: req.body.address2,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password
        }).then(function(response){
            res.json({success: true});  
        })
    })

    app.post('/seats/create', function(req, res) {
        db.Seats.create({
          seat: parseInt(req.body.seat),
          isfree: req.body.isfree,
          available :req.body.available,
          GameId: parseInt(req.body.GameId)
        }).then(function(response){
            res.json({success: true});
        });
    });
};