## 原理
```javascript
app
  .get('/tables/:id', (request, response) => {
    // http://localhost:3000/tables/items -> {request.param.name => 'items'}
    const rows = db.get('select * from ' + request.param.name);
    // 結果をウェブブラウザーに表示する
  });
```

* こういうのが見つかると割と余裕なんだけど...
  - "`http://localhost:3000/tables/sqlite_master`"
* だけど、都合よく見つかることはあまりない
