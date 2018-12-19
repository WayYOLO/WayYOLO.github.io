import { stringify } from 'qs';
import request from '../../../utils/request';

export async function query() {
  return request({
    url: 'https://api.github.com/users/wayyolo',
    method: 'get',
  });
}

export async function getBlogLists(params) {
  return request({
    url: `https://api.github.com/repos/wayyolo/wayyolo.github.io/issues?${stringify(params)}`,
    method: 'get',
  });
}
