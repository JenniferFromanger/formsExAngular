import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function rangeDateValidator(minDate, maxDate): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const checkYear = control.value;
    if (checkYear < maxDate || checkYear > minDate) {
      return null;
    } else {
      // 'min' is the error key
      return {
        min: {
          minimale: minDate,

          maximale: maxDate,
        },
      };
    }
  };
}
