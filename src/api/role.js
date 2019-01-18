import request from '@/utils/request'

var prefix = '/role'

// 角色新增
export function add(role) {
  return request({
    url: prefix + '/add',
    method: 'post',
    params: role
  })
}

// 角色修改
export function edit(roleDto) {
  return request({
    url: prefix + '/edit',
    method: 'post',
    params: roleDto
  })
}

// 删除角色
export function remove(roleId) {
  return request({
    url: prefix + '/remove',
    method: 'post',
    params: { 'roleId': roleId }
  })
}

// 查看角色
export function view(userId) {
  return request({
    url: prefix + '/view',
    method: 'get',
    params: { 'userId': userId }
  })
}

// 获取角色列表
export function list(roleName) {
  return request({
    url: prefix + '/list',
    method: 'post',
    params: { 'roleName': roleName }
  })
}

// 配置权限
export function setAuthority(roleId, ids) {
  return request({
    url: prefix + '/setAuthority',
    method: 'post',
    params: {
      'roleId': roleId,
      'ids': ids
    }
  })
}

// 获取角色列表
export function roleTreeList() {
  return request({
    url: prefix + '/roleTreeList',
    method: 'get'
  })
}

// 获取角色列表，通过用户id
export function roleTreeListByUserId(userId) {
  return request({
    url: prefix + '/roleTreeListByUserId',
    method: 'get',
    params: { 'userId': userId }
  })
}

