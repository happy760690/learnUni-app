export type LocationErrorType =
  | 'no-permission'
  | 'denied'
  | 'timeout'
  | 'unavailable'

export interface LocationResult {
  success: boolean
  latitude?: number
  longitude?: number
  error?: LocationErrorType
}
