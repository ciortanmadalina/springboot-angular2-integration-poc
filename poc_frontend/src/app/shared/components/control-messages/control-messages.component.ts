import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'control-messages',
  template: `<div *ngIf="errorMessage !== null" class={{styleClass}}>{{errorMessage}}</div>`
})
export class ControlMessagesComponent {
  @Input() control: FormControl;
  @Input() styleClass: String;
  constructor(private translateService: TranslateService) { }

  get errorMessage() {
    if ( this.control === null) {
        return null;
    }
    for (let propertyName in this.control.errors) {
        //&& this.control.touched
      if (this.control.errors.hasOwnProperty(propertyName) ) {
        return this.messageByErrorCode(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }
  messageByErrorCode(errorCode: string, validatorValue?: any) {
	 let config = {
		'required': this.translateService.get('errorMessage.Required')['value'],
		'invalidEmailAddress': this.translateService.get('errorMessage.InvalidEmailAddress')['value'],
		'minlength': `Minimum length ${validatorValue.requiredLength}`,
		'maxlength': `${this.translateService.get('errorMessage.MaxLength', {'value': validatorValue.requiredLength } )['value']}`,
		'customError':'Custom Error example'
	   };
	  return config[errorCode];
	}
}
