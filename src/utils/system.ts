import type { SystemInfo } from '@/types/system'
import { getSystemInfo } from '@/uts/system.uts'

const defaultSystemInfo: SystemInfo = {
  platform: 'unknown',
  screenWidth: 0,
  screenHeight: 0,
  pixelRatio: 1
}

export const useSystemInfo = (): SystemInfo => {
  try {
    return getSystemInfo()
  } catch (e) {
    console.warn('getSystemInfo failed', e)
    return defaultSystemInfo
  }
}
