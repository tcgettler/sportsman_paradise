var Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes){
    
    const Games = sequelize.define('Games', {
        game_name:{
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING
        },
        image_location: {
            type: DataTypes.STRING
        },
        active: {
            type: DataTypes.BOOLEAN
        }
    });
    return Games;
};
