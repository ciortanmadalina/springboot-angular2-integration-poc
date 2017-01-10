import { Component, OnInit } from '@angular/core';
import { BackendService } from './../../services/backend.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Person } from './../../domain/person';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {
  backendResponse:string;
  personForm: FormGroup;
  person:Person = new Person();

  constructor(private fb: FormBuilder, private backendService: BackendService) { }
  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.personForm = this.fb.group({
      'firstName': [this.person.firstName, 
          Validators.required
      ],
      'lastName': [this.person.lastName, 
          Validators.required
      ]

    });
  }
  invokeBackend(){
    this.backendResponse = "";
    this.person = this.personForm.value;
    this.backendService.callBackend(this.person.firstName, this.person.lastName).subscribe(
      data => {
        console.log('received data' + JSON.stringify(data));
        this.backendResponse = JSON.stringify(data);
      },
      error => {
        console.log('connection error' + error);
        this.backendResponse = error;
      }
    );
  }

}
