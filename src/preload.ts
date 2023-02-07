import { contextBridge, ipcRenderer } from "electron";

const client = {
    findAll: (props: {limit:number; offset:number}) => ipcRenderer.invoke('client-findAll', props)
}

export const api = {
    client
}

contextBridge.exposeInMainWorld("API", api)