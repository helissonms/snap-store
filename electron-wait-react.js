const net = require('net');
const { spawn } = require('child_process');

const port = process.env.PORT || 3000;

process.env.ELECTRON_START_URL = `http://localhost:${port}`;

const client = new net.Socket();

let startedElectron = false;

const tryConnection = () => client.connect({ port }, () => {
  client.end();

  if (!startedElectron) {
    console.log('starting electron...');

    startedElectron = true;

    const execOptions = {
      cwd: process.cwd(),
      env: process.env,
    };

    const electronProc = spawn('./node_modules/electron/dist/electron', ['./electron-main.js'], execOptions);

    electronProc.stdout.on('data', (data) => {
      console.log(`${data}`);
    });

    electronProc.stderr.on('data', (data) => {
      console.error(`${data}`);
    });

    electronProc.on('error', (error) => {
      console.error(`${error}`);
    });

    electronProc.on('close', (code) => {
      startedElectron = false;
      console.log(`Exited with code: ${code}`);
    });
  }
});

client.on('connect', () => {
  console.log('connected');
});

client.on('error', error => {
  console.log('error', error.message);
  startedElectron = false;

  setTimeout(() => {
    tryConnection();
  }, 1000);
});

tryConnection();
