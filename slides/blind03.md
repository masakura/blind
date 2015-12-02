## 原理
```javascript
app
  .get('/:id', (request, response) => {
    // http://localhost:3000/1 -> {request.param.id => 1}
    const rows = db.get('select * from items where id = ' + request.param.id);
    // 結果をウェブブラウザーに返す
  });
```

* "`http://localhost:3000/1`"
  - データがあるので表示される!
* "`http://localhost:3000/1 and 1 = 1`"
  - データがあって、`1 = 1` は真なので表示される
* "`http://localhost:3000/1 and 1 = 2`"
  - データがあっても、`1 = 2` は偽なので表示されない
