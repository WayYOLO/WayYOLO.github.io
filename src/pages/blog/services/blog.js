import request from '../../../utils/request';
import { stringify } from 'qs';

export async function query () {
  return request({
    url: 'https://api.github.com/users/wayyolo',
    method: 'get',
  })
}

export async function getBlogLists (params) {
  return request({
    url: `https://api.github.com/repos/wayyolo/wayyolo.github.io/issues?${stringify(params)}`,
    method: 'get',
  })
}
