const fs = require('fs');
const path = require('path');
const _ = require('underscore');
const app = require('express')();

function getTemplate(name) {
  const filePath = path.join(__dirname, '../templates', name);
  const templateFile = fs.readFileSync(filePath, 'utf-8');
  return _.template(templateFile);
}

module.exports = (database) => {
  app
    .get('/', (request, response) => {
      database.all('select * from items;')
        .then(rows => {
          response.send(getTemplate('index.html')({items: rows}));
        });
    })
    .get('/:id', (request, response) => {
      // sql injection
      database.get('select * from items where id = ' + request.params.id)
        .then(rows => {
          if (rows.length > 0) {
            response.send(getTemplate('item.html')({item: rows[0]}));
          } else {
            response.status(404).send(getTemplate('404.html')());
          }
        }, () => response.status(404).send(getTemplate('404.html')()));
    });

  return app;
};
