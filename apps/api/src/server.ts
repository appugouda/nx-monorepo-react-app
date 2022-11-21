import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Message } from '@brady-comm/api-interfaces';
import * as path from 'path';
import { DataController } from './app/dataController';

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
const obj = new DataController();
app.get('/api/data', (req, res) => {
  obj.getData(req, res);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const routes = appRouter(app, fs);

const greeting: Message = { message: 'Data Fetching from API...' };
app.get('/api', (req, res) => {
  res.send(greeting);
});

// app._router(routes);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
