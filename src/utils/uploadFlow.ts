import type { AppFile } from '@/types/file'
import { uploadFile } from './upload'

/**
 * 单文件上传（支持重试）
 */
export const uploadWithState = async (
  file: AppFile
): Promise<AppFile> => {
  return await uploadFile({
    ...file,
    status: 'uploading'
  })
}

/**
 * 批量上传（串行，便于控制）
 */
export const uploadFiles = async (
  files: AppFile[]
): Promise<AppFile[]> => {
  const result: AppFile[] = []

  for (const file of files) {
    const uploaded = await uploadWithState(file)
    result.push(uploaded)
  }

  return result
}
