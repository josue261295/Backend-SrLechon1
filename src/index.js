   

import app from './server.js';  
const PORT = process.env.PORT || 4000;
//npm run dev para iniciar el servidor en modo desarrollo
app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto: ${PORT}`);
  
});