import { Cloudinary } from '@cloudinary/url-gen'

const config = {
  cloud_name: 'duo0fcchr',
  upload_preset: 'xniuenra',
}

export const cloud = new Cloudinary({
  cloud: {
    cloudName: config.cloud_name,
  },
})

export function getUploadUrl() {
  return process.env.CLOUDINARY_URL?.concat(`/v1_1/${config.cloud_name}/upload`)
}

export default config
