"use strict";

const path = require("path")
const electron = require("electron")

let _mainWindow = null

function createWindow() {
    _mainWindow = new electron.BrowserWindow()
    _mainWindow.loadFile(path.join(__dirname, "index.html"))
    _mainWindow.on("closed", () => _mainWindow = null)
}


electron.app.on("ready", () => {
    createWindow()

    let lastTime = Date.now()

    electron.session.defaultSession.webRequest.onBeforeRequest((details, callback) => {
        const currentTime = Date.now()

        const url = details.url
        console.log(`Loading: ${url} (${currentTime - lastTime} ms since last load)`)
        callback({cancel: false})

        lastTime = currentTime
    })
})

electron.app.on("window-all-closed", () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
        electron.app.quit()
    }
})

electron.app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (_mainWindow === null) {
        createWindow()
    }
})
