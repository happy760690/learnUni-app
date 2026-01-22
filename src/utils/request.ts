interface RequestOptions extends UniApp.RequestOptions {
  showLoading?: boolean
}

export const request = <T = any>(
  options: RequestOptions
): Promise<T> => {
  const { showLoading = true } = options

  if (showLoading) {
    uni.showLoading({ title: '加载中' })
  }

  return new Promise((resolve, reject) => {
    uni.request({
      ...options,
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data as T)
        } else {
          reject(new Error('请求失败'))
        }
      },
      fail: reject,
      complete: () => {
        if (showLoading) {
          uni.hideLoading()
        }
      }
    })
  })
}
