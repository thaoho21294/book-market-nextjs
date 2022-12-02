import { AdvancedImage, responsive } from '@cloudinary/react'
import { useRef } from 'react'
import useUploadImage from '../../hooks/useUploadImage'
import styles from '../../styles/Photos.module.scss'

const PhotoUploader = () => {
  const { imagesUploaded, upload, setFiles } = useUploadImage()
  const ref = useRef<HTMLInputElement>(null)
  const resetInput = () => {
    if (ref.current) {
      ref.current.value = ''
    }
  }

  return (
    <div className={styles['container']}>
      <input
        ref={ref}
        type="file"
        id="fileupload"
        accept="image/*"
        onChange={(e) => {
          setFiles(e.target?.files)
        }}
      />
      <br />
      <button onClick={() => upload(resetInput)}>Upload</button>
      <div className={styles['images']}>
        {imagesUploaded.map((img, index) => (
          <AdvancedImage key={index} cldImg={img} plugins={[responsive()]} />
        ))}
      </div>
    </div>
  )
}

PhotoUploader.getLayout = (page: React.ReactElement) => page

export default PhotoUploader
