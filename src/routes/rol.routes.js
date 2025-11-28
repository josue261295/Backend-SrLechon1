import { Router } from "express";
import { RolController } from "../controllers/Rol.controller.js";
import { body } from "express-validator";
import { handleErrors } from "../middleware/validation.js";
const router = Router();

router.post("/create-rol", 
    body('name')
        .trim().toLowerCase()
        .isLength({min:1, max: 25}).withMessage('el nombre del rol debe tener al menos 1 caracteres')
        .not().matches(/[\W_]/).withMessage("el nombre del rol no debe contener caracteres especiales"),
       

    body('active')
    .isBoolean().withMessage('el valor es incorrrecto'),
    handleErrors,
    RolController.createRol
);

export default router;