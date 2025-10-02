import pool from "../database/connection";
import { ApiError } from "../errors/ApiError";

const dbQuery = `
insert into attendance (user_id, meeting_id) values ((select id from users where nusp = $1), $2)
`

export async function addAttendanceData(nusp: number, meetingId: number) {
    const { rowCount } = await pool.query(dbQuery, [nusp, meetingId]);
    if (rowCount === 0) throw new ApiError(400, "Não foi possível registrar a presença");
    return;
}