import type { AppState } from '@/types/app'
import { useSystemInfo } from '@/utils/system'
import { useNetworkInfo } from '@/utils/network'
import { useUserInfoPermission } from '@/utils/permission'

let appState: AppState | null = null

export const initApp = async (): Promise<AppState> => {
  if (appState) {
    return appState
  }

  const [system, network, permission] = await Promise.all([
    Promise.resolve(useSystemInfo()),
    useNetworkInfo(),
    useUserInfoPermission()
  ])

  appState = {
    system,
    network,
    permission,
    ready: true
  }

  return appState
}
