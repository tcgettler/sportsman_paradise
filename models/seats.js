var Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes){
    
    const Seats = sequelize.define('Seats', {
        seat:{
            type: DataTypes.INTEGER
        },
        isfree: {
            type: DataTypes.BOOLEAN
        },
        available: {
            type: DataTypes.BOOLEAN
        }
    });

    Seats.associate = function(models) {
        Seats.belongsTo(models.Games, {
            onCascade: 'delete'
        });
    }
    return Seats;
};


