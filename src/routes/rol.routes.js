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
router.get("/rol-users", RolController.getRolAll);
router.get("/rol-users/:id", RolController.getRolById);


router.put ("/rol-user/:id", 

 body('name')
        .trim().toLowerCase()
        .isLength({ min: 1, max: 25 }).withMessage('El nombre debe tener como minimo 1 caracter')
        .not().matches(/[\W_]/).withMessage("El nombre no debe contener caracteres especiales"),
    body('active')
        .isBoolean().withMessage('El valor es incorrecto'),
    handleErrors,
    RolController.updateRol
);

router.delete("/rol-user/:id", RolController.deleteRol);

export default router;