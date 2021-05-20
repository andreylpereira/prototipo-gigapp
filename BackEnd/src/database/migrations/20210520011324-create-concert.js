'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('concert', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      venue_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'venue', key: 'id' },
        onUpdate: 'CASCADE',        
      },
      band_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'band', key: 'id' },
        onUpdate: 'CASCADE',        
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      ticketPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};
