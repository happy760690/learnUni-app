import type { NetworkInfo } from '@/types/system'
import { getNetworkInfo } from '@/uts/network.uts'

const defaultNetworkInfo: NetworkInfo = {
  networkType: 'unknown',
  isConnected: false
}

export const useNetworkInfo = async (): Promise<NetworkInfo> => {
  try {
    return await getNetworkInfo()
  } catch {
    return defaultNetworkInfo
  }
}
