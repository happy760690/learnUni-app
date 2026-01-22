import { request } from '@/utils/request'
import type { ListItem } from '@/types/list'

/**
 * 模拟接口请求
 */
export const fetchList = (): Promise<ListItem[]> => {
  return request<ListItem[]>({
    url: 'https://mock.apifox.cn/m1/xxxx/list',
    method: 'GET'
  })
}


