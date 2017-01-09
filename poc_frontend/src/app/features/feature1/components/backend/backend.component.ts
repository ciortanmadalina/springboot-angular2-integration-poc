import { Component, OnInit } from '@angular/core';
import { BackendService } from './../../services/backend.service';
@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {
  backendResponse:string;
  constructor(private backendService: BackendService) { }

  ngOnInit() {

  }

  invokeBackend(){
    this.backendService.callBackend().subscribe(
      data => {
        console.log('received data' + JSON.stringify(data));
        this.backendResponse = data;
      },
      error => console.log('connection error' + error)
    );
  }

}
