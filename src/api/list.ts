import type { ListItem } from '@/types/list'
import { fetchListMock } from '@/mock/list'

// 开关：后期一行切真实接口
const USE_MOCK = true

export const fetchList = (): Promise<ListItem[]> => {
  if (USE_MOCK) {
    return fetchListMock()
  }

  // 以后真实接口写在这里
  // return request<ListItem[]>({ url: '/list' })

  return Promise.resolve([])
}
