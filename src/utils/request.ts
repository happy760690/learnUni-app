export const request = (options) => {
  return new Promise((resolve, reject) => {
    uni.request({
      timeout: 10000,
      ...options,
      success: (res) => resolve(res.data),
      fail: reject,
    });
  });
};
