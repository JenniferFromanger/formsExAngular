import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function isRequiredValidator(id: any, title: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // Get first control value
    const checkId = control.get(id).value;
    // Get second control value
    const checkTitle = control.get(title).value;

    if ((checkTitle !== '' && checkTitle !== ' ') || checkId > 0) {
      return null;
    } else {
      return { isRequired: { actual: '', expected: 'not null' } };
    }
  };
}
