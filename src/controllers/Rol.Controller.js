import Rol from "../models/Rol.model.js";

export class RolController {
    static createRol = async (req, res) => {

        const { name } = req.body;

        const rolExists = await Rol.findOne({ where: { name } });
        if (rolExists) {
            res.status(400).json({ error: "El rol ya existe" });
            return;
        }

        try {
            const rol = await Rol.create(req.body);
            await rol.save();
            res.status(201).json("Rol creado correctamente");
            return;
        } catch (error) {
            console.log(error)
            return
        }

    }

    static getRolAll = async (req, res) => {

        try {
            const getRol = await Rol.findAll();
            res.status(200).json(getRol)
            return;
        } catch (error) {
            console.log(error);
            return;

        }

    }


static getRolById = async (req, res) => {
    const { id } = req.params;


    const rolById = await Rol.findByPk(id);
    if (!rolById) {
        res.status(404).json({ error: 'Rol no encontrado' });
        return;
    }

    res.status(200).json(rolById);



}

static updateRol =async (req, res) => {

    const { id } = req.params;

    const rolUpdate = await Rol.findByPk(id);
    if (!rolUpdate) {
        res.status(404).json({ error: 'Rol no encontrado' });
        return;
    }

    try{

        await rolUpdate.update(req.body);
        res.status(200).json({ message: 'Rol actualizado correctamente' });
    } catch (error) {
        console.log(error);



    }





}


static deleteRol = async (req, res) => {
const { id } = req.params;

const rolDelete = await Rol.findByPk(id);

if (!rolDelete) {
    res.status(404).json({ error: 'Rol no encontrado' });
    return;

}
    try {
        await rolDelete.destroy();
        res.status(200).json({ message: 'Rol eliminado correctamente' });
        return;
    } catch (error) {
        console.log(error);
        return;
    }



}

}