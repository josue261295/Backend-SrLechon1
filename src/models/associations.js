import Rol from './Rol.model.js';
import User from './User.model.js';

Rol.hasMany(User, { 
    foreignKey: 'idRol', as: 'users'

})

User.belongsTo(Rol, {
    foreignKey: 'idRol',
    as: 'rol'   
    })

    export { Rol, User };
