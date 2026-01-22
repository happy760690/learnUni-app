export const showError = (msg: string): void => {
  uni.showToast({
    title: msg,
    icon: 'none'
  })
}

export const showSuccess = (msg: string): void => {
  uni.showToast({
    title: msg
  })
}
