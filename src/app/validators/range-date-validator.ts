import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function rangeDateValidator(
  minDate: number,
  maxDate: number
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const checkYear = control.value;
    if (minDate <= checkYear && checkYear <= maxDate) {
      return null;
    } else {
      // 'min' is the error key
      return {
        min: {
          minDate,
          maxDate,
        },
      };
    }
  };
}
