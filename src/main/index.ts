import { ipcMain } from "electron";
import { knex } from "./database/connection";

type rawClient = {
    id: number,
    name: string
}

export function initializeAPI() {
    ipcMain.handle("client-findAll", async (event, {limit, offset}) => {
        return await knex<rawClient>('client').limit(limit).offset(offset)
    })
}