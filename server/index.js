import 'babel-polyfill';
import express from 'express';

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();

app.use(express.static(process.env.CLIENT_PATH));

const localConnection = {
  database: 'edtech-mockup'
};

const knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL || localConnection
});

app.get("/questions", (req, res) => {
  knex("questions").then((questions) => {
      res.status(200).json(questions); 
  }); 
}); 

function runServer() {
  return new Promise((resolve, reject) => {
    app.listen(PORT, HOST, (err) => {
      if (err) {
        console.error(err);
        reject(err);
      }

      const host = HOST || 'localhost';
      console.log(`Listening on ${host}:${PORT}`);
      });
    });
}

if (require.main === module) {
    runServer();
}
