import type { LoginParams, LoginResult } from '@/types/auth'
import { loginMock } from '@/mock/auth'

// 一行切真实接口
const USE_MOCK = true

export const login = (
  params: LoginParams
): Promise<LoginResult> => {
  if (USE_MOCK) {
    return loginMock(params)
  }

  // return request<LoginResult>({ url: '/login', method: 'POST', data: params })
  return Promise.reject()
}
