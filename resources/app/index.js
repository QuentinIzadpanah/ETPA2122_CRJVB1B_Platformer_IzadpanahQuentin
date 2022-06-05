const {app, BrowserWindow} = require('electron');

function createWindow(){
    const win = new BrowserWindow({
        width:1900,
        height:1000,
        webPreferences:{
            nodeIntegration:true
        }
    })
    win.setMenuBarVisibility(false);
    win.loadFile('index.html');
}

app.whenReady().then(createWindow)