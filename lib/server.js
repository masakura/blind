const fs = require('fs');
const path = require('path');
const _ = require('underscore');
const app = require('express')();

function getTemplate(name) {
  const filePath = path.join('templates', name);
  const templateFile = fs.readFileSync(filePath, 'utf-8');
  return _.template(templateFile);
}

module.exports = () => {
  app.get('/', (request, response) => {
    response.send(getTemplate('index.html')());
  });

  return app;
};
