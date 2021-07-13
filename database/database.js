const { Sequelize, Model, DataTypes } = require('sequelize');
//const sequelize = new Sequelize('postgres://postgres:160620@localhost:5432/DATVEXEMPHIM');
const sequelize = new Sequelize('postgres://thcstzzyafncxn:e32901d757cbf8cb77c83dea1b618fa4d24ad206b6e397d7629d8f2320691c51@ec2-18-214-140-149.compute-1.amazonaws.com:5432/d24dldfpkmk6gb', {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        }
    }
});

module.exports = sequelize;
