import React from 'react';

export const InputText = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;
  // const hasError = errors[name] && touched[name]
  return (
    <>
      <input value={value}
        onChange={onChange}
        onBlur={() => {
          setFieldTouched(name)
          onBlur(name)
        }}
        {...inputProps} />
    </>
  )
}