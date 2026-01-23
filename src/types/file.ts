export type UploadStatus =
  | 'idle'
  | 'uploading'
  | 'success'
  | 'error'

export interface AppFile {
  path: string
  size: number
  name: string
  type: 'image' | 'file'
  status?: UploadStatus
  url?: string
}
