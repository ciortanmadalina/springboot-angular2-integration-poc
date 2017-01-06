import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
  TranslateService
]
})
export class AppComponent implements OnInit{
  title = 'Angular 2 POC';

  constructor(public http: Http, private translateService: TranslateService) {
}


ngOnInit(): any {
  console.log('hello app component');
  this.http.get('/api/greeting')
        .subscribe(
          data => {
            console.log('Received ' + data.json());
          },
          err => console.log('Something went wrong')
        );

        // this language will be used as a fallback when a translation isn't found in the current language
      this.translateService.setDefaultLang('fr');
       // the lang to use, if the lang isn't available, it will use the current loader to get them
      this.translateService.use('fr');
        console.log("Application component initialized ...");
  }



}
