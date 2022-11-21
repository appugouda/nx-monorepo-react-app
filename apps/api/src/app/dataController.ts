import * as path from 'path';
import * as fs from 'fs';

export class DataController {
  basePathToData = path.join(__dirname, './data');

  getJsonData = (basePathToData, filename) => {
    const fname = path.join(basePathToData, filename);
    return JSON.parse(fs.readFileSync(fname, 'utf-8'));
  };

  getData = (request, response) => {
    const data = this.getJsonData(this.basePathToData, 'users.json');
    setTimeout(function() {
      return response.send(data);
    }, 100);
  };
}
