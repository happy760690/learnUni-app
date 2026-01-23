import type { AppFile } from '@/types/file'
import { useFilePicker } from './file'
import { uploadFile } from './upload'

export const pickAndUpload = async (
  type: 'image' | 'file'
): Promise<AppFile[]> => {
  const files = await useFilePicker(type)

  const result: AppFile[] = []

  for (const file of files) {
    const uploaded = await uploadFile(file)
    result.push(uploaded)
  }

  return result
}
