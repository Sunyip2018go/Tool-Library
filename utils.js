/*
* grade 菜单主键id
*  superiorMenuId 父级id
*/
export function toTree(data) {
  data.forEach(function (item) {
      delete item.children;
  });
  var map = {};
  data.forEach(function (item) {
      map[item.grade] = item;
  });
  var val = [];
  data.forEach(function (item) {
      var parent = map[item.superiorMenuId];
      if (parent) {
          (parent.children || ( parent.children = [] )).push(item);
      } else {
          val.push(item);
      }
  });
  return val;
}
