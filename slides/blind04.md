## 原理

```sql
select * from items where id = 1 and
  (select count(*) from sqlite_master where tbl_name = 'users') > 0
```

* `users` テーブルがあれば通常通りの画面、なければデータがありません画面になる

```
sqlite> select * from items where id = 1 and
   ...>   (select count(*) from sqlite_master where tbl_name = 'users') > 0;
1|978-4621066058|EFFECTIVE JAVA|3888
sqlite> select * from items where id = 1 and
   ...>   (select count(*) from sqlite_master where tbl_name = 'notexists') > 0;
sqlite>
```
