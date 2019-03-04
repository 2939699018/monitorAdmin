import request from '@/utils/request'

var prefix = '/dept'

// 部门新增
export function add(dept) {
  return request({
    url: prefix + '/add',
    method: 'post',
    params: dept
  })
}

// 部门修改
export function edit(deptDto) {
  return request({
    url: prefix + '/update',
    method: 'post',
    params: deptDto
  })
}

// 删除部门
export function remove(deptId) {
  return request({
    url: prefix + '/delete',
    method: 'post',
    params: { 'deptId': deptId }
  })
}

// 查看部门
export function view(deptId) {
  return request({
    url: prefix + '/detail/'+deptId,
    method: 'get',
    params: { 'deptId': deptId }
  })
}

// 获取部门列表
export function list(condition,deptId) {
  return request({
    url: prefix + '/list',
    method: 'post',
    params: {
      'condition': condition,
      'deptId': deptId
    }
  })
}

// 获取部门的tree列表
export function deptTreeList() {
  return request({
    url: prefix + '/treeview',
    method: 'get'
  })
}


