const net = require('net');
const { spawn } = require('child_process');

const port = process.env.PORT || 3000;

process.env.ELECTRON_START_URL = `http://localhost:${port}`;

const client = new net.Socket();

let startedElectron = false;

const tryConnection = () => client.connect({ port });

client.on('connect', () => {
  console.log('connected');
  client.end();

  if (startedElectron) {
    console.log('electron already has started...');
    return;
  }

  console.log('starting electron...');

  startedElectron = true;

  const execOptions = {
    cwd: process.cwd(),
    env: process.env,
  };

  const electronProc = spawn('./node_modules/electron/dist/electron', ['./electron-main.js'], execOptions);

  process.on('SIGINT', () => electronProc.kill('SIGINT'));

  electronProc.stdout.on('data', (data) => {
    console.log(`${data}`);
  });

  electronProc.stderr.on('data', (data) => {
    console.error(`${data}`);
  });

  electronProc.on('error', (error) => {
    console.error(`${error}`);
  });

  electronProc.on('exit', (code, signal) => {
    startedElectron = false;
    console.log(`Exited by signal ${signal} with code: ${code}`);
  });
});

client.on('error', error => {
  console.log(error.message);
  startedElectron = false;

  setTimeout(() => {
    tryConnection();
  }, 1000);
});

tryConnection();
