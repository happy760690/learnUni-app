import type { AppFile } from '@/types/file'
import { mockUpload } from '@/mock/upload'

export const uploadFile = async (
  file: AppFile
): Promise<AppFile> => {
  try {
    return await mockUpload({
      ...file,
      status: 'uploading'
    })
  } catch (e) {
    return {
      ...file,
      status: 'error'
    }
  }
}
