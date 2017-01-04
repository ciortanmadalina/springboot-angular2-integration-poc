import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { HttpModule, Http, XHRBackend, RequestOptions, ConnectionBackend, BrowserXhr } from '@angular/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Router} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
