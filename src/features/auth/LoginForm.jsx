import { Form, Formik } from 'formik'
import React from 'react'
import ModalWrapper from '../../app/common/modals/ModalWrapper'
import * as Yup from 'yup'
import MyTextInput from '../../app/common/form/MyTextInput'
import { Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
//import { signInUser } from './authActions'
import { closeModal } from '../../app/common/modals/modalReducer'
import { signInWithEmail } from '../../app/firestore/firebaseService'

export default function LoginForm() {
  const dispatch = useDispatch()
  return (
    <ModalWrapper size='mini' header='Sign in to EventCore'>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().required().email(),
          password: Yup.string().required(),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await signInWithEmail(values)
            setSubmitting(false)
            dispatch(closeModal())
          } catch (error) {
            setSubmitting(false)
            console.log(error)
          }
        }}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className='ui form'>
            <MyTextInput name='email' placeholder='Email' type='email' />
            <MyTextInput
              name='password'
              placeholder='Password'
              type='password'
            />
            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type='submit'
              fluid
              size='large'
              color='blue'
              content='Login'
            />
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  )
}
