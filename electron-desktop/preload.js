
const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('electronAPI', { send: (c,d)=>ipcRenderer.send(c,d) });
