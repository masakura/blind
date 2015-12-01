const sqlite3 = require('sqlite3');

module.exports = {
  setup() {
    this.db = new sqlite3.Database(':memory:');
  },
  close() {
  },
};
