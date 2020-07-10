import * as fs from 'fs';

fs.createReadStream('.env.example')
  .pipe(fs.createWriteStream('.env'));
