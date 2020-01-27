'use strict';
const db = require('../models');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Games', [{
      game_name: 'Mario',
      price: 19.99,
      description: "Mario in the house",
      seats:30,
      image_location: 'media/gun.jpg'
    },
    {
        game_name: 'Luigi',
        price: 39.99,
        description: "Luigi is scurred",
        seats:27,
        image_location: 'media/gun.jpg'
    },
    {
        game_name: 'Peach',
        price: 25.99,
        description: "Peach is feelin her oats",
        seats:30,
        image_location: 'media/gun.jpg'
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Product', null, {});
  }
};


