export type FieldValidator<TFormValues, TFieldValue> = (
  value: TFieldValue,
  formValues: TFormValues
) => string | undefined | null;

export type FieldValidators<T> = {
  [P in keyof T]?: FieldValidator<T, T[P]>;
};

export function createFormValidator<T>(fieldValidators: FieldValidators<T>) {
  return (formValues: T) => {
    type ValidatorEntries = Array<[keyof T, FieldValidator<T, any>]>;
    const validators = Object.entries(
      fieldValidators
    ) as unknown as ValidatorEntries;

    const errors: Partial<Record<keyof T, string>> = {};

    for (const [field, validator] of validators) {
      const fieldError = validator(formValues[field], formValues);
      if (fieldError) {
        errors[field] = fieldError;
      }
    }

    return errors;
  };
}
