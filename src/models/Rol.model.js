import { DataTypes, Model } from 'sequelize';
import { db } from '../database/db.js';
 
 

class Rol extends Model {}
    
   
    Rol.init({

        id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

        name: {
            type: DataTypes.STRING(35),
            allowNull: false,
            unique: true,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    }, 
    
        {
        sequelize: db,
        modelName: 'Rol',
        tableName: 'roles', 
    }
)    





 
export default Rol;