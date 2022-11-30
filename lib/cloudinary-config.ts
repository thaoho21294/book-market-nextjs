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

export default config
