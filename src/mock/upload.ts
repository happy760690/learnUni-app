import type { AppFile } from '@/types/file'

export const mockUpload = (
  file: AppFile
): Promise<AppFile> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 模拟 10% 失败
      if (Math.random() < 0.1) {
        reject(new Error('Upload failed'))
      } else {
        resolve({
          ...file,
          status: 'success',
          url: `https://mock.cdn.com/${file.name}`
        })
      }
    }, 1000)
  })
}
