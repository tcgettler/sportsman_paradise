module.exports = function(sequelize, DataTypes){
    const Games = sequelize.define('Games', {
        game_name:{
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DECIMAL(10, 2)
        },
        description: {
            type: DataTypes.STRING
        },
        seats: {
            type: DataTypes.STRING
        },
        image_location: {
            type: DataTypes.STRING
        }
    });

    return Games;
};


