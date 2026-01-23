import type { AppFile } from '@/types/file'
import { useCamera } from './camera'
import { useFilePicker } from './file'
import { uploadFiles } from './uploadFlow'

export const takePhotoAndUpload = async (): Promise<AppFile[]> => {
  const photo = await useCamera()
  if (!photo) return []

  const file: AppFile = {
    path: photo.tempFilePath,
    size: photo.size,
    name: 'camera.jpg',
    type: 'image',
    status: 'idle'
  }

  return await uploadFiles([file])
}

export const pickFilesAndUpload = async (
  type: 'image' | 'file'
): Promise<AppFile[]> => {
  const files = await useFilePicker(type)

  const readyFiles: AppFile[] = files.map((f) => ({
    ...f,
    status: 'idle'
  }))

  return await uploadFiles(readyFiles)
}
