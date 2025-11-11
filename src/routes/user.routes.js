
import { Router } from 'express';
const router = Router();

router.post("/create-user", (req, res) => {
  // Lógica para crear un usuario
  res.send("Usuario creado");
});

router.get("/create-user", (req, res) => {
  // Lógica para crear un usuario
  res.send("Usuario creado");
});


export default router;