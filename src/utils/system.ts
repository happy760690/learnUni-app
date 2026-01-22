import type { SystemInfo } from '@/types/system'
import { getSystemInfo } from '@/uts/system.uts'

/**
 * TS 层统一出口
 * 页面只接触这个
 */
export const useSystemInfo = (): SystemInfo => {
  return getSystemInfo()
}
