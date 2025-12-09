import { DataTypes, Model } from "sequelize";
import { db } from "../database/db.js";


class User extends Model { }
User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING(40),
        allowNull: false

    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,

    },

    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,

    },

    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    idRol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        references: {
            model: 'roles',
            key: 'id'
        }

    },
    idRol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'roles',
            key: 'id'
        }


    }

}, {
    sequelize: db,
    modelName: 'User',
    tableName: 'users',
}
            
)


export default User;