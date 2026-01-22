export type PermissionStatus =
  | 'authorized'
  | 'denied'
  | 'not-determined'

export interface PermissionResult {
  status: PermissionStatus
}
