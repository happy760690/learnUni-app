import type { PermissionResult } from '@/types/permission'
import { checkUserInfoPermission } from '@/uts/permission.uts'

export const useUserInfoPermission = async (): Promise<PermissionResult> => {
  return await checkUserInfoPermission()
}
