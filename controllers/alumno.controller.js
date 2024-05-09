import { Alumnos } from '../models/alumno.model.js'

// mostrar todos los alumnos
export const getAllAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumnos.findAll()
        return res.json(alumnos)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}
//crear un alumno
export const postAlumno = async (req, res) => {
    try {
        const { nombre, rut, curso, nivel } = req.body
        const newAlumnos = await Alumnos.createAlumno({ nombre, rut, curso, nivel })
        return res.json(newAlumnos)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}
//eliminar un alumno
export const deleteAlumno = async (req, res) => {
    try {
        const { rut } = req.params
        console.log(req.params)
        const deleteAlumno = await Alumnos.deleteAlumno({ rut })
        return res.json(deleteAlumno)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}
// revisar un alumno con su rut
export const getAlumno = async (req, res) => {
    try {
        const { rut } = req.params
        console.log(req.params)
        const resAlumno = await Alumnos.getAlumno({ rut })
        return res.json(resAlumno)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}
// actualizar un alumno
export const putAlumno = async (req, res) => {
    try {
        const { rut } = req.params
        const { nombre, curso, nivel } = req.body
        const updateAlumnos = {
            rut,
            nombre,
            curso,
            nivel
        }
        console.log(req.body)
        const updateAlumno = await Alumnos.updateAlumno(updateAlumnos)
        return res.json(updateAlumno)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}