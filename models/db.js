const { Sequelize } = require('sequelize');

module.exports = new Sequelize(process.env.DATABASE_URL || 'postgres://thcstzzyafncxn:e32901d757cbf8cb77c83dea1b618fa4d24ad206b6e397d7629d8f2320691c51@ec2-18-214-140-149.compute-1.amazonaws.com:5432/d24dldfpkmk6gb',{
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        }
    }
}
);