import { ReactElement } from 'react'

const Login = () => {
  return <>this page is not using default layout </>
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>
}

export default Login
