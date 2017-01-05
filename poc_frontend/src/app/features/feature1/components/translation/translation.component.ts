import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {
  param =  {value: 'world'};
  constructor() { }

  ngOnInit() {
  }

}
