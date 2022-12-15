const AR_LOGIN = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "AR_LOGIN",//creat table visitor (ID, name, comment)
        {
            id : { // id varchar(20) not null primary key
                type : DataTypes.STRING(20),
                allowNull : false, 
                primaryKey : true, 
            },
            pw : { //pw varchar(20) not null
                type : DataTypes.STRING(20),
                allowNull :  false
            },
            name : { // name varchar(10) not null
                type : DataTypes.STRING(10),
                allowNull : false
            },
            e_mail : { //e_mail varchar(10) not null
                type : DataTypes.STRING(10),
                allowNull : false                
            }
        },
        {
            tablename : "AR_LOGIN", 
            freezeTableName : true, 
            timestamps : false 
        }
    )
}

module.exports = AR_LOGIN;