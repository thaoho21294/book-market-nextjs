import { Cloudinary } from '@cloudinary/url-gen'

export const cloud = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUD_NAME,
  },
})

export function getUploadUrl() {
  return process.env.NEXT_PUBLIC_CLOUDINARY_API_URL?.concat(
    `/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/upload`
  )
}
