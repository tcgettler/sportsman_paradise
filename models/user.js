var Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes){
    
    const User = sequelize.define('User', {
        user_fname:{
            type: DataTypes.STRING
        },
        user_lname: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        address2: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        state: {
            type: DataTypes.STRING
        },
        zip: {
            type: DataTypes.INTEGER
        },
        phone: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        }, 
        password: {
            type: DataTypes.STRING
        }
    });

    return User;
};