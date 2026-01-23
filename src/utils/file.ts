import type { AppFile } from '@/types/file'
import { chooseFile } from '@/uts/file.uts'

export const useFilePicker = async (
  type: 'image' | 'file'
): Promise<AppFile[]> => {
  try {
    return await chooseFile(type)
  } catch (e) {
    console.warn('chooseFile error', e)
    return []
  }
}
