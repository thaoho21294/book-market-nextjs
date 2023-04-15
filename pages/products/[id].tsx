import { useRouter } from 'next/router'

const Product = () => {
  const { query } = useRouter()
  const { id } = query

  return <p>Product: {id}</p>
}

export default Product
