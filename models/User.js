const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./db');


const User = db.define('User', {
    // Model attributes are defined here
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
        type: DataTypes.STRING,
      },
    phone: {
        type: DataTypes.STRING,
    },
    role:{
      type: DataTypes.STRING,
    }
  });


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

   User.Register = async function(name,email,password,phone,role){
    return await User.create({ name: name, email: email, password: password, phone: phone, role: role});
   };
   module.exports = User;