import { DataTypes } from 'sequelize';
import { db } from '../database/db.js';
 
 
const Rol = db.define('roles', {
    name: {
        type: DataTypes.STRING(35),
        allowNull: false,
        unique: true,
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
})
 
 
export default Rol;