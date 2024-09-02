# Islamic Notification App

This Node.js application, built with Electron, sends periodic desktop notifications to remind users to remember Allah (سبحان الله). The notifications include a customizable message, title, and icon, designed to inspire spiritual mindfulness throughout the day.

## Features

- Sends desktop notifications with a customizable title, message, and icon.
- Runs as a standalone executable without the need for additional Node.js setup.
- Configurable notification intervals.
- Auto-starts with Windows for continuous reminders.

## Prerequisites

- No prerequisites needed. The app is packaged as a standalone executable.

## Installation

1. **Download the App:**
    - Download the `IslamicNotifier-win32-x64` folder containing the app executable (`IslamicNotifier.exe`) and all necessary files.

2. **Run the App:**
    - Navigate to the `IslamicNotifier-win32-x64` folder.
    - Double-click `IslamicNotifier.exe` to start the application.

## Auto-Run on Windows Startup

To ensure `IslamicNotifier.exe` runs automatically when your computer starts, follow these steps:

1. **Create a Shortcut for the App:**
    - Right-click on `IslamicNotifier.exe` and select **Create shortcut**.

2. **Move the Shortcut to the Startup Folder:**
    - Press `Win + R` to open the Run dialog.
    - Type `shell:startup` and press Enter. This will open the Windows Startup folder.
    - Move the shortcut you created into the Startup folder.

This will ensure that `IslamicNotifier.exe` starts automatically every time you log into Windows.

## Distribution

To distribute your app:
- Share the entire `IslamicNotifier-win32-x64` folder with users.
- Users should run `IslamicNotifier.exe` from within this folder.

For a more professional distribution, consider creating an installer using tools like `electron-builder`.

## Building the App

If you need to rebuild or customize the app, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
