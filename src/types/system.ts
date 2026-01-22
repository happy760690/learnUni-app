/**
 * 系统信息能力模型
 * 这是 TS 世界的“契约”
 */
export interface SystemInfo {
  platform: 'mp-weixin' | 'h5' | 'unknown'
  screenWidth: number
  screenHeight: number
  pixelRatio: number
}
