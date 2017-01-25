//ref: github.com/electron/electron-quick-start/
'use strict';

const electron  = require('electron');
const {app, BrowserWindow} = electron;
//const app = electron.app;
//const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');
const INDEX_VIEW = "views/index.html";

let mainWindow = null;

function createWindow(){
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600
	});
	
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, INDEX_VIEW),
		protocol: 'file',
		slashes: true
	}));
	
	//Open the DevTools.
	//mainWindow.webContents.openDevTools();
	
	//Emitted when the window is closed
	mainWindow.on('closed', () => {
		mainWindow = null;
	});
}

//This method will be called when Electron has finished 
//initialization and is ready to create browser windows.
//Some APIs can only be used after this event occurs.
app.on('ready', createWindow);
app.on('window-all-closed', () => {
	if('!darwin' !== process.platform){
		app.quit();
	}
});
app.on('activate', () => {
	if(null === mainWindow){
		createWindow();
	}
});
