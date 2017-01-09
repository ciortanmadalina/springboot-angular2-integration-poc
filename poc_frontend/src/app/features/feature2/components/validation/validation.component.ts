import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from './../../services/custom-validator';
import { Person } from './../../domain/person';
import { Address } from './../../domain/address';
@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  personForm: FormGroup;
  person:Person = new Person();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.personForm = this.fb.group({
      'attribute1': [this.person.attribute1, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10)
        ]
      ],
      'attribute2': [this.person.attribute2],
      addresssGroup: this.fb.group({
          streetName:[this.person.address.streetName,
                      Validators.compose([ Validators.maxLength(255) ]) ],
          streetNumber:[this.person.address.streetNumber, 
                      Validators.maxLength(10) ],
          zipCode:[this.person.address.zipCode, 
                      Validators.maxLength(15)],
          municipality:[this.person.address.municipality, 
                      Validators.maxLength(255) ],
          box:[ this.person.address.box,
                      Validators.maxLength(10)]
                },
          {validator: CustomValidator.groupAddressValidator})

    });
  }

  onSubmit() {
    this.person = this.personForm.value;
    console.log("Submitted " + JSON.stringify(this.person));
  }

  resetForm(){
    console.log("Reset form!");
    this.person = new Person();
    this.buildForm();
  }

}
