import type { CameraResult } from '@/types/camera'
import { takePhoto } from '@/uts/camera.uts'

export const useCamera = async (): Promise<CameraResult | null> => {
  try {
    return await takePhoto()
  } catch (e) {
    console.warn('camera error', e)
    return null
  }
}
