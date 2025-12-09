import jwt from 'jsonwebtoken';



export const generateJWT = (id,email ) => {

    const token = jwt.sign({ id, email }, process.env.JWT_SECRET,{


        expiresIn: '3d'
    })
return token;

}