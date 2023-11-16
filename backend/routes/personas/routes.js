import express from "express";
import { Persona, PersonaxDepto } from "../../controlers/EmpleadosControler.js";

const router = express.Router()

router.get('/personas/:legajo',Persona)

router.get('/personas/xdepto/:depto',PersonaxDepto)

export default router