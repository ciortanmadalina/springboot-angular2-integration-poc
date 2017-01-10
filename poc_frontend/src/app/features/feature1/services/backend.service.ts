import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class BackendService {
  private backendUrl = '/api/person/search';
  constructor(private http: Http) { }

  callBackend (firstName: string, lastName: string): Observable<string> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let search: URLSearchParams =  new URLSearchParams();
      search.append('firstName', firstName);
      search.append('lastName', lastName);
    let options = new RequestOptions({ headers: headers, search:search });
    return this.http.get(this.backendUrl, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return  body || { }; //body.data
  }

  private handleError (error: any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
