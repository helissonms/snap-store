const http = require('http');
const httpProxy = require('http-proxy');
const uuidV4 = require('uuid/v4');

const serve = () => new Promise((resolve, reject) => {
  const proxy = httpProxy.createProxyServer({
    target: {
      socketPath: '/run/snapd.socket',
    },
  });

  const token = uuidV4();

  const server = http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', 'Authorization');

    if (request.method === 'OPTIONS') {
      return response.end();
    }

    if (!request.headers.authorization || request.headers.authorization !== token) {
      response.statusCode = 401;
      return response.end();
    }

    request.headers = {
      ...request.headers,
      'X-Allow-Interaction': 'true',
    };

    return proxy.web(request, response);
  });

  server.on('error', error => reject(error));

  server.on('listening', () => {
    const details = {
      ...server.address(),
      token,
    };

    console.log(`API listening on ${details.address}:${details.port}`);

    resolve(details);
  });

  server.listen(0, '127.0.0.1');
});

module.exports = serve;
