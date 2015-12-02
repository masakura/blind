## SQL Injection とは?
```javascript
app
  .get('/:id', (request, response) => {
    // http://localhost:3000/1 -> {request.param.id => 1}
    const rows = db.get('select * from items where id = ' + request.param.id);
    // 結果をウェブブラウザーに返す
  });
```

* "`http://localhost:3000/1; drop table users`"
  - select * from users where id = 1; drop table users
* こんな感じで SQL 文を実行できる
  - 好きなテーブルを削除できる!
