import request from '@/utils/request'

export function serverUpload(key, value) {
  const data = {
    key,
    value
  }
  return request({
    url: '/server/upload',
    method: 'post',
    params: data
  })
}

export function serverGet(key) {
  const data = {
    key
  }
  return request({
    url: '/server/upload',
    method: 'get',
    params: data
  })
}

