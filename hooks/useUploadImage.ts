import axios from '../lib/axios'
import config, { cloud } from '../lib/cloudinary-config'
import { useState } from 'react'
import { CloudinaryImage } from '@cloudinary/url-gen'

const useUploadImage = () => {
  const [files, setFiles] = useState<FileList | null>()

  const [imagesUploaded, setImagesUploaded] = useState<Array<CloudinaryImage>>(
    []
  )
  const upload = async (callback: () => void) => {
    const url = `https://api.cloudinary.com/v1_1/${config.cloud_name}/upload`

    if (files != null) {
      try {
        for (let i = 0; i < files.length; i++) {
          const file = files[i]
          const fd = new FormData()
          fd.append('upload_preset', config.upload_preset)
          fd.append('tags', 'samples')
          fd.append('file', file)
          const { data } = await axios.post(url, fd)
          setImagesUploaded([...imagesUploaded, cloud.image(data.public_id)])
          setFiles(null)
          callback()
        }
      } catch (err) {
        setFiles(null)
        throw err
      }
    }
  }

  return {
    setFiles,
    upload,
    imagesUploaded,
  }
}

export default useUploadImage
