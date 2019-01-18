import request from '@/utils/request'

var prefix = '/menu'

// 菜单新增
export function add(menu) {
  return request({
    url: prefix + '/add',
    method: 'post',
    params: menu
  })
}

// 菜单修改
export function edit(menuDto) {
  return request({
    url: prefix + '/edit',
    method: 'post',
    params: menuDto
  })
}

// 删除菜单
export function remove(menuId) {
  return request({
    url: prefix + '/remove',
    method: 'post',
    params: { 'menuId': menuId }
  })
}

// 查看菜单
export function view(userId) {
  return request({
    url: prefix + '/view',
    method: 'get',
    params: { 'userId': userId }
  })
}

// 获取菜单列表
export function list(menuName, level, menuId) {
  return request({
    url: prefix + '/list',
    method: 'post',
    params: {
      'menuName': menuName,
      'level': level,
      'menuId': menuId
    }
  })
}

// 获取菜单信息
export function getMenuInfo(menuId) {
  return request({
    url: prefix + '/getMenuInfo',
    method: 'post',
    params: {
      'menuId': menuId
    }
  })
}

// 获取菜单列表(首页用)
export function menuTreeList() {
  return request({
    url: prefix + '/menuTreeList',
    method: 'get'
  })
}
// 获取菜单列表(选择父级菜单用)
export function selectMenuTreeList() {
  return request({
    url: prefix + '/selectMenuTreeList',
    method: 'get'
  })
}

// 获取角色的菜单列表
export function menuTreeListByRoleId(roleId) {
  return request({
    url: prefix + '/menuTreeListByRoleId',
    method: 'get',
    params: { 'roleId': roleId }
  })
}

