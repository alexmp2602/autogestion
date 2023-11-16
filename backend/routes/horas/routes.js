import express from "express";
import { Horas, HorasFecha } from "../../controlers/HorasControler.js";

const router = express.Router()

router.get('/horas/:codtar',Horas)

router.get('/horas/:codtar/:fecha',HorasFecha)

export default router