import { FormikProvider, useFormik } from 'formik'
import { ReactElement } from 'react'
import { Button, Dimmer, Form, Icon, Loader } from 'semantic-ui-react'
import FormInput from '../../components/FormInput'
import styles from '../../styles/Login.module.scss'

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values))
    },
  })
  return (
    <div className={styles['login-container']}>
      <div className={styles['login-title']}>
        <Icon name="book" size="huge" circular color="green"></Icon>
        <h2>Sign in to Book Market</h2>
      </div>
      <Dimmer active={false}>
        <Loader />
      </Dimmer>
      <FormikProvider value={formik}>
        <Form className={styles['login-form']}>
          <FormInput id="username" name="username" required label="Username" />
          <FormInput
            id="password"
            label="Password"
            name="password"
            type="password"
            required
          />
          <Button
            onClick={() => {
              formik.handleSubmit()
            }}
            color="green"
          >
            Log in
          </Button>
        </Form>
      </FormikProvider>
    </div>
  )
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>
}

export default Login
