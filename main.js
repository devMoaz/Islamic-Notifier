const { app, BrowserWindow, Notification } = require('electron');
const path = require('path');

app.setAppUserModelId('com.devmoaz.islamicnotifier');

function createWindow() {
  const win = new BrowserWindow({
    show: false
  });
  
  showInitialNotification();
  
  setInterval(showNotification, 3 * 60 * 1000);
}

function showInitialNotification() {
  const initialNotification = new Notification({
    title: 'Islamic Notifier Started',
    body: 'The notifier has started and will remind you to remember Allah.',
    icon: path.join(__dirname, 'icon.png')
  });
  
  initialNotification.show();
  
  setTimeout(() => {
    initialNotification.close();
  }, 5000);
}

function showNotification() {
  const notification = new Notification({
    title: 'تذكير بالذكر',
    body: 'سبح بحمد ربك واذكره في كل حين',
    icon: path.join(__dirname, 'icon.png')
  });
  
  notification.show();
  
  setTimeout(() => {
    notification.close();
  }, 10000);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
