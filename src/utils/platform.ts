import { getDevicePlatform } from '@/uts/device.uts'

export const getPlatform = (): string => {
  return getDevicePlatform()
}
