import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function isRequiredValidator(id: any, title: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // Get first control value
    const checkId = control.get(id).value;
    // Get second control value
    const checkTitle = control.get(title).value;

    if (checkId === '' || checkTitle === '') {
      return { isRequired: { actual: '', expected: id || title } };
    } else {
      return null;
    }
  };
}
