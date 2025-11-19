import { DataTypes } from "sequelize";
import { db } from "../database/db.js";

const User = db.define('usuarios',{
    name : {
        type: DataTypes.STRING(40),
        allowNull: false
        
        },      
     email : {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,

        },    

    phone : {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,

        }, 

    password : {
        type: DataTypes.STRING(100),
        allowNull: false,
        }

    })


    export default User;