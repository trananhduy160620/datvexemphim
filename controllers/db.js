const { Sequelize } = require('sequelize');
module.exports = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:handsome1018@localhost:5432/todo',{
    // dialect: 'postgres',
    // dialectOptions: {
    //     ssl: {
    //         rejectUnauthorized: false,
    //     }
    // }
});
