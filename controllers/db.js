const { Sequelize } = require('sequelize');

//heorku
// module.exports = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:postgre@localhost:5432/todo',{
//     dialect: 'postgres',
//     dialectOptions:{
//         ssl: {
//             rejectUnauthorized: false,
//         }
//     }
// });

//local
module.exports = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:postgre@localhost:5432/todo');