import axios from '../lib/axios'
import { cloud, getUploadUrl } from '../lib/cloudinary-utils'
import { useState } from 'react'
import { CloudinaryImage } from '@cloudinary/url-gen'

const uploadPreset = process.env.NEXT_PUBLIC_UPLOAD_PRESET ?? ''

const useUploadImage = () => {
  const [files, setFiles] = useState<FileList | null>()

  const [imagesUploaded, setImagesUploaded] = useState<Array<CloudinaryImage>>(
    []
  )
  const upload = async (callback: () => void) => {
    const url = getUploadUrl()

    if (files != null) {
      try {
        for (let i = 0; i < files.length; i++) {
          const file = files[i]
          const fd = new FormData()
          fd.append('upload_preset', uploadPreset)
          fd.append('tags', 'samples')
          fd.append('file', file)
          const { data } = await axios.post(url ?? '', fd)
          setImagesUploaded([...imagesUploaded, cloud.image(data.public_id)])
          setFiles(null)
          callback()
        }
      } catch (err) {
        setFiles(null)
        callback()
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
