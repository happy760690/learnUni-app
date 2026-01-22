import type { ListItem } from '@/types/list'

export const mockList: ListItem[] = [
  {
    id: 1,
    title: 'uni-app TS 实战',
    desc: '使用 TypeScript 构建 uni-app 项目'
  },
  {
    id: 2,
    title: '组件化设计',
    desc: 'props / emit / slot 强类型'
  },
  {
    id: 3,
    title: '状态管理',
    desc: 'Pinia + 登录态'
  }
]

/**
 * 模拟异步请求
 */
export const fetchListMock = (): Promise<ListItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockList)
    }, 500)
  })
}
