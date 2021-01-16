import { BrowserWindow, remote } from 'electron';

const mainWindow = remote.BrowserWindow.getAllWindows[0];

const alertWindow = new BrowserWindow({
  width: 500,
  height: 320,
  parent: mainWindow,
});

alertWindow.loadURL(`file://${__dirname}/app.html#/remove`);

export default alertWindow;
