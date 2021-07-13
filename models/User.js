const { Sequelize, Model, DataTypes } = require('sequelize')
const db = require('./db')
const User = db.define('NguoiDung', {
    UserID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    MatKhau: {
        type: Sequelize.STRING,
        allowNull: true
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
        allowNull: false
    }
}, {
    tableName: 'NguoiDung',
    createdAt: false,
    freezeTableName: true,
    updatedAt: false,
})

User.ResetCode = async function(id){
User.update({code:null},{
    where:{
    id,
}
});
}

User.findbyEmail = async function(email){
    return User.findOne({
        where:{
            email,
        },
    });
};

User.findbyId = async function(id){
    return User.findByPk(id);
};

User.Register = async function(Email , MatKhau, HoTen, SDT, VaiTro){
    return await User.create({Email:Email, MatKhau:MatKhau, HoTen:HoTen, SDT:SDT, VaiTro:VaiTro});
};

module.exports = User;