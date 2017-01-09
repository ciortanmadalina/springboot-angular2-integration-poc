import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { HttpModule, Http, XHRBackend, RequestOptions, ConnectionBackend, BrowserXhr } from '@angular/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { Router} from '@angular/router';
import { Autosize } from './directives/autosize';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ Autosize, ControlMessagesComponent],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Autosize,
    ControlMessagesComponent
  ]
})
export class SharedModule { }
