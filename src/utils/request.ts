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
      success: (res) => resolve(res.data as T),
      fail: reject,
      complete: () => {
        if (showLoading) {
          uni.hideLoading()
        }
      }
    })
  })
}
