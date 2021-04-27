import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'

export default function MyPlaceInput({ label, options, ...props }) {
  const [field, meta] = useField(props)

  // function handleSelect(address) {
  //   geocodeByAddress(address)
  //     .then((results) => getLatLng(results[0]))
  //     .then((latLng) => helpers.setValue({ address }))
  //     .catch((error) => helpers.setError(error))
  // }

  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <Label basic color='red'>
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  )
}
