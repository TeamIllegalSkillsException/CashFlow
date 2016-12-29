import {AbstractControl} from '@angular/forms';

export class StringValidator {

  public static validate(c:AbstractControl) {

    if(c.value) {
        if(c.value.trim() == '') {
            return {
                validateString: {
                    valid: false
                }   
            }
        } else {
            return null;
        }
    }
    
  }
}
