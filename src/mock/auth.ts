import type { LoginParams, LoginResult } from '@/types/auth'

export const loginMock = (
  params: LoginParams
): Promise<LoginResult> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const { username, password } = params

      if (username === 'admin' && password === '123456') {
        resolve({
          token: 'mock-token-abc-123'
        })
      } else {
        reject(new Error('用户名或密码错误'))
      }
    }, 500)
  })
}
