//validation for contact form
export function required(value) {
  return value ? undefined : 'Required'
}

export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined


export const contactWarn = values => {
  const warnings = {}

  return warnings
}

//validation for contact form
export const personalitiesValidate = values => {
  const errors = {}
  if(values.teachers && values.teachers.length === 6) {
   errors.teachers = { _error: "Only 6 teachers" };
  }
  return errors;
}