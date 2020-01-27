module.exports = function(sequelize, DataTypes){
    const User = sequelize.define('User', {
        user_fname:{
            type: DataTypes.STRING
        },
        user_lname: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.DECIMAL(10, 2)
        },
        description: {
            type: DataTypes.STRING
        },
        stock_quantity: {
            type: DataTypes.INTEGER
        },
        image_location: {
            type: DataTypes.STRING
        }
    });

    return User;
};