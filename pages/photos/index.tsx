import config from '../../lib/cloudinary-config'
import { useState } from 'react'
import axios from 'axios'
import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'

const uploadAgent = axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
})

const cld = new Cloudinary({
  cloud: {
    cloudName: config.cloud_name,
  },
})

const PhotoUploader = () => {
  const [files, setFiles] = useState<FileList | null>()
  console.log({ files })
  const myImage = cld.image('aiozux1an9ftpoi3rnip')
  return (
    <div className="upload_button_holder">
      <AdvancedImage cldImg={myImage} />
      <input
        type="file"
        id="fileupload"
        accept="image/*"
        onChange={(e) => {
          setFiles(e.target?.files)
        }}
      />
      <br />
      <button
        onClick={() => {
          const url = `https://api.cloudinary.com/v1_1/${config.cloud_name}/upload`

          if (files != null) {
            for (let i = 0; i < files.length; i++) {
              const file = files[i]
              const fd = new FormData()
              fd.append('upload_preset', config.upload_preset)
              fd.append('tags', 'samples')
              fd.append('file', file)
              console.log(file)
              uploadAgent.post(url, fd)
            }
          }
        }}
      >
        Upload
      </button>
    </div>
  )
}

PhotoUploader.getLayout = (page: React.ReactElement) => page

export default PhotoUploader
