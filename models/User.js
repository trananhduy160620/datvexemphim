const { Sequelize, Model, DataTypes } = require('sequelize')
const db = require('./db')
const User = db.define('NguoiDung', {
    Email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    MatKhau: {
        type: Sequelize.STRING,
        allowNull: false
    },
    HoTen: {
        type: Sequelize.STRING,
        allowNull: true
    },
    SDT: {
        type: Sequelize.STRING,
        allowNull: true
    },
    VaiTro: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    Code: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    tableName: 'NguoiDung',
    createdAt: true,
    freezeTableName: true,
    updatedAt: true,
})

User.resetCode = async function(id){
    return await User.update({Code: null},{
        where:{
          id: id
        }
  });
};

User.findByEmail = async function(email){
    return User.findOne({
        where:{
            Email: email,
        },
    });
};

User.findbyId = async function(id){
    return User.findByPk(id);
};

User.register = async function(Email , MatKhau, HoTen, Code){
    return await User.create({Email:Email, MatKhau:MatKhau, HoTen:HoTen, Code:Code});
};

module.exports = User;