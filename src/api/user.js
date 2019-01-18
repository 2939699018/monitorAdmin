import request from '@/utils/request'

var prefix = '/mgr'

// 获取用户详情
export function getUserInfo(userId) {
  return request({
    url: prefix + '/getUserInfo',
    method: 'post',
    params: {
      'userId': userId
    }
  })
}

// 修改当前用户的密码
export function changePwd(oldPassword, newPassword) {
  return request({
    url: prefix + '/changePwd',
    method: 'post',
    params: {
      'oldPassword': oldPassword,
      'newPassword': newPassword
    }
  })
}

// 获取用户列表
export function list(userName) {
  return request({
    url: prefix + '/list',
    method: 'post',
    params: { 'userName': userName }
  })
}

// 用户新增
export function add(user) {
  return request({
    url: prefix + '/add',
    method: 'post',
    params: user
  })
}

// 用户修改
export function edit(userDto) {
  return request({
    url: prefix + '/edit',
    method: 'post',
    params: userDto
  })
}

// 删除用户
export function remove(userId) {
  return request({
    url: prefix + '/delete',
    method: 'post',
    params: { 'userId': userId }
  })
}

// 查看用户
export function view(userId) {
  return request({
    url: prefix + '/view',
    method: 'get',
    params: { 'userId': userId }
  })
}

// 重置管理员的密码
export function reset(userId) {
  return request({
    url: prefix + '/reset',
    method: 'get',
    params: { 'userId': userId }
  })
}

// 冻结用户
export function freeze(userId) {
  return request({
    url: prefix + '/freeze',
    method: 'get',
    params: { 'userId': userId }
  })
}

// 解除冻结用户
export function unfreeze(userId) {
  return request({
    url: prefix + '/freeze',
    method: 'get',
    params: { 'userId': userId }
  })
}

// 分配角色
export function setRole(userId, roleIds) {
  return request({
    url: prefix + '/setRole',
    method: 'get',
    params: {
      'userId': userId,
      'roleIds': roleIds
    }
  })
}

// 上传图片?
export function upload(picture) {
  return request({
    url: prefix + '/upload',
    method: 'get',
    params: {
      'picture': picture
    }
  })
}
