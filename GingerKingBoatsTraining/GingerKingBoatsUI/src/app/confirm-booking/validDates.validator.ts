import { AbstractControl } from '@angular/forms';

export class DateValidator {
    // validates start date selected is not before today's date
    static startDate(control: AbstractControl): any {
        const today = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
        if (new Date(control.value) >= new Date(today)){
            return null;
        } else {
            return { 'validStart' : false };
        }
    }
}