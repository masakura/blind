const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3');

module.exports = {
  setup() {
    this.db = new sqlite3.Database(':memory:');
    this.db.serialize(() => {
      const sqls = fs.readFileSync(path.join(__dirname, 'setup.sql'), 'utf-8');
      this.db.exec(sqls);
    });
  },
  all(sql) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, (error, rows) => {
        if (!error) {
          resolve(rows);
        } else {
          reject(error);
        }
      });
    });
  },
  close() {
    this.db.close();
  },
};
