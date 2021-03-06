const http = require('http');
const fs = require('fs');

const corsAllowed = ['http://localhost:3000'];

const cors = (origin, response) => {
    response.setHeader('Access-Control-Allow-Origin', origin);
}

function getRandomInt(min = 0, max = 11) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const textRandoms = {
  0: 'Report 1',
  1: 'Report 2',
  2: 'Report 3',
  3: 'Report 4',
  4: 'Report 5',
  5: 'Report 6',
  6: 'Report 7',
  7: 'Report 8',
  8: 'Report 9',
  9: 'Report 10',
  10: 'Report 11',
};

const data = fs.readFileSync('./sss.mp3');

const files = [];

setInterval(() => {
    const int = getRandomInt();
    if(int === 4) {
        files.push({title: 'Sound'});
    } else {
        files.push({title: textRandoms[getRandomInt()], fileId: getRandomInt()});
    }
}, 10000);


const handlerFile = (id, response) => {
  if(!fs.existsSync('./docs')) {
      fs.mkdirSync('./docs');
  }
  if(!fs.existsSync(`./docs/file-${id}.txt`)) {
      fs.writeFileSync(`./docs/file-${id}.txt`, textRandoms[getRandomInt()]);
  }

  const file = fs.readFileSync(`./docs/file-${id}.txt`);
  response.write(file);
};

const server = http.createServer((req, res) => {
  if(corsAllowed.includes(req.headers.origin)) {
   cors(req.headers.origin, res);
  }

  if(req.url.includes('loadSound')) {
      res.setHeader('Content-type', 'audio/mp3');
      res.write(data);
  } else if (req.url.includes('loadDoc')) {
      const [, id] = req.url.slice(1).split('/');
      handlerFile(id, res);
  } else if (req.url.includes('loadFiles')) {
      res.setHeader('Content-type', 'application/json');
      res.write(JSON.stringify(files));
  }
  res.end();
});

server.listen(3002, () => {
    console.log('ПОРТ: 3002, СЕРВЕР СЛУШАЕТ ТЕБЯ!')
});

process.on('uncaughtException', (err) => {
   console.log('ОШИБКА: ', err);
});