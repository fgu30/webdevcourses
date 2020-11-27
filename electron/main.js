const { app, BrowserWindow, ipcMain } = require('electron')
const windowStateKeeper = require('electron-window-state')
const readItem = require('./readItem')

ipcMain.on('new-item', (e, itemUrl) => {

  readItem(itemUrl, item => {
    e.sender.send('new-item-success', item)
  })

})

let mainWindow

function createWindow() {

  let state = windowStateKeeper({
    defaultHeight: 650,
    defaultWidth: 500
  })

  mainWindow = new BrowserWindow({
    x: state.x,
    y: state.y,
    width: state.width,
    height: state.height,
    minWidth: 350,
    maxWidth: 900,
    minHeight: 300,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL('http://localhost:8080')

  state.manage(mainWindow)

  mainWindow.webContents.openDevTools()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

app.allowRendererProcessReuse = true