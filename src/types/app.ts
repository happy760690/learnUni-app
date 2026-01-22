import type { SystemInfo } from './system'
import type { NetworkInfo } from './system'
import type { PermissionResult } from './permission'

export interface AppState {
  system: SystemInfo
  network: NetworkInfo
  permission: PermissionResult
  ready: boolean
}
