export interface UploadAvatarResult {
  uploadAvatar: string;
}

export interface UploadAvatarInput {
  id: string;
  avatar: {};
}

export interface AvatarInput {
  base64: string;
  size: number;
  type: string;
}
