const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:160620@localhost:5432/DATVEXEMPHIM');

// (async function () {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//         const Phim = sequelize.define('Phim', {
//             ID: {
//                 type: Sequelize.INTEGER,
//                 allowNull: false
//             },
//             Ten: {
//                 type: Sequelize.STRING,
//                 allowNull: true
//             },
//             NgayCongChieu: {
//                 type: Sequelize.STRING,
//                 allowNull: true
//             },
//             Poster: {
//                 type: Sequelize.STRING,
//                 allowNull: true
//             },
//             ThoiLuong: {
//                 type: Sequelize.STRING,
//                 allowNull: true
//             }
//         });
//         await sequelize.sync()

//         const phims = await Phim.findAll()
//         console.log(phims)
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// })().catch(console.error)
module.exports = sequelize;
// chiều x
// chiều y isBooking = true || false
//  a b c d
//  e f g h