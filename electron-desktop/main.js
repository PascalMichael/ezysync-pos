
const { app, BrowserWindow } = require('electron');
function create(){ const win = new BrowserWindow({ width: 1200, height: 800 }); win.loadURL('http://localhost:3000'); }
app.whenReady().then(create);
