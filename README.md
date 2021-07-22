# common-methods-jy

### 安装
```
npm i common-methods-jy
```

### group：根据分页来拆分数组对象数据

```
/**
 * 根据分页来拆分数组对象数据
 * arr：为原数组对象
 * pageSize: 为分页pageSize
 */

const { group } = require('common-methods-jy');

const arr = [1,2,3,4,5,6,7,8,9,10,11];

console.log(group(arr, 2)); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11 ] ]
```

### filterSearch：一维数组对象模糊搜索
```
/**
 * 一维数组对象模糊搜索
 * oldList：一维数组数据结构
 * keyword：input框搜索值
 * type：指定要搜索的字段名，数据类型为Array，如：['name', 'id']
 */
 
const { filterSearch } = require('common-methods-jy');

const arr = [{name: '小明', 'id': 1},{name: '小红', id: 2}]；

const keyword = '小明'；

const type = ['name', 'id']；

console.log(filterSearch(arr, keyword, type));// [ { name: '小明', id: 1 } ]
```
