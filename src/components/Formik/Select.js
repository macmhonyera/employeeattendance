import React from "react"
import { Field, ErrorMessage } from "formik"

function Select(props) {
  const { label, name, options, ...rest } = props
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          )
        })}
      </Field>
      <div className="text-red-500 text-xs">
        <ErrorMessage name={name} />
      </div>
    </div>
  )
}

export default Select