const fs = require('fs');
const path = require('path');
const _ = require('underscore');
const app = require('express')();

function getTemplate(name) {
  const filePath = path.join('templates', name);
  const templateFile = fs.readFileSync(filePath, 'utf-8');
  return _.template(templateFile);
}

module.exports = (database) => {
  app.get('/', (request, response) => {
    database.all('select * from items;')
      .then(rows => {
        response.send(getTemplate('index.html')({items: rows}));
      });
  });

  return app;
};
