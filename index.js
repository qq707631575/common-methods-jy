/**
 * 根据分页来拆分数组对象数据
 * arr：为原数组对象
 * pageSize: 为分页pageSize
 */

function group (arr, pageSize) {
  let index = 0
  let newArr = []
  while(index < arr.length) {
    newArr.push(arr.slice(index, index += pageSize))
  }
  return newArr
}

/**
 * 一维数组对象模糊搜索
 * oldList：一维数组数据结构
 * keyword：input框搜索值
 * type：指定要搜索的字段名，数据类型为Array，如：['name', 'id']
 */

function filterSearch (oldList, keyword, type) {
  let newArr = oldList.filter((item, index) => {
    for(let j = 0; j < type.length; j++) {
      if (item[type[j]] !== undefined || item[type[j]] !== null) {
        if (String(item[type[j]]).indexOf(value) >= 0) {
          return item
        }
      }
    }
  })
  return newArr
}

module.exports = {
  group,
  filterSearch
}
