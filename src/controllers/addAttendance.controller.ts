import { Request, Response} from "express";
import {addAttendanceInSchema} from "../schemas/attendance/input/addAttendance.schema";
import { addAttendanceData } from "../repositories/addAttendance.repository";


const addAttendance = async(req: Request, res: Response): Promise<void> => {
    // pegar os dados do request - POST (body)
    // dados: nusp e id da reuniao
    const body = addAttendanceInSchema.parse(req.body);

    // adicionar linha no banco de dados
    await addAttendanceData(body.nusp, body.meetingId);


    res.status(201).json({message: "Presença registrada com sucesso!"});

}

export {addAttendance};