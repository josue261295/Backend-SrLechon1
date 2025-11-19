import {body,param} from 'express-validator';
import { Router } from 'express';
import { UserController } from '../controllers/User.controller.js';
import { handleErrors } from '../middleware/validation.js';
const router = Router();

router.post("/create-user", 
    body('name')
        .notEmpty().withMessage('el nombre no debe estar vacio').trim().toLowerCase()
        .isLength({min:5, max: 50}).withMessage('el nombre debe tener al menos 3 caracteres')
        .not().matches(/[\W_]/)  // caht gpt para validaciones de nombre contra y demas 
        .withMessage("dfgdfgdfgdfgdfgdgf")
        .escape(),
    body('email')
        .isEmail().withMessage('el email no es valido'),
    body('password') // averiguar es scape() para password
        .isLength({min:8}).withMessage('la contraseña debe tener al menos 8 caracteres')
        .matches(/[a-z]/).withMessage('la contraseña debe tener al menos una letra minuscula')
        .matches(/[A-Z]/).withMessage('la contraseña debe tener al menos una letra mayuscula')
        .matches(/[0-9]/)
        .withMessage("La contraseña debe contener al menos un número")
        .matches(/[\W_]/)
        .withMessage("La contraseña debe contener al menos un carácter especial"),
    body('phone')
        .isInt().withMessage('el telefono no es valido').trim()
        .isLength({min:8, max:8}).withMessage('el telefono debe tener solo 8 digitos')
        .escape(),

    
           handleErrors,
    UserController.createUser);

router.get("/users", UserController.getUserAll);

router.put("/user-update/:id",param('id').isInt({gt:0}).toInt().withMessage('el id es invalido'),handleErrors, UserController.updateUser);



export default router;