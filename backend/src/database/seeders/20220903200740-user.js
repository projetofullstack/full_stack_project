/* eslint-disable no-unused-vars */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        id: '20db4ab0-c100-4af8-afcd-3108b398431f',
        name: 'Márcio Daniel',
        email: 'marcio.daniel@betrybe.com',
        password: '12345678',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
