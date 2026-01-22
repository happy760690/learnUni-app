export const goDetailPage = (id: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    uni.navigateTo({
      url: `/pages/detail/index?id=${id}`,
      success: () => resolve(),
      fail: (err: any) => reject(err),
    });
  });
};
