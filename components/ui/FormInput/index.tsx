import { useController } from 'react-hook-form'
import { Form, FormInputProps } from 'semantic-ui-react'

interface Props extends FormInputProps {
  label?: string
  className?: string
  name: string
}

const FormInput = ({ name, label, className, ...otherProps }: Props) => {
  const { field, fieldState } = useController({ name })
  const errorMessage = fieldState.error
  return (
    <Form.Input
      className={className}
      label={label}
      error={
        errorMessage != null
          ? {
              content: errorMessage,
            }
          : null
      }
      {...field}
      {...otherProps}
    />
  )
}

export default FormInput
