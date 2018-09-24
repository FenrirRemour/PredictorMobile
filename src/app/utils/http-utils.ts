import {Headers, Http, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Observable';
import "rxjs/Rx";


const globalRequestOptions = new RequestOptions({
  headers: new Headers({'Content-Type': 'application/json'}),
  withCredentials: true
});

@Injectable()
export class HttpUtils {
 

  constructor(private _http: Http) {
  }

  httpGet(url: string, headers?: RequestOptions): any {
    return this._http
      .get(url, (headers != null) ? headers : globalRequestOptions)
      .map((res: any) => this.handleResponse(res))
      .catch((error: any) => this.handleError(error));
  }

  httpPost(url: string, body: any, headers?: RequestOptions): any {
    return this._http.post(url, body, (headers != null) ? headers : globalRequestOptions)
      .map((res: any) => this.handleResponse(res))
      .catch((error: any) => this.handleError(error));
  }

  httpPut(url: string, body: any, headers?: RequestOptions): any {
    return this._http.put(url, body, (headers != null) ? headers : globalRequestOptions)
      .map((res: any) => this.handleResponse(res))
      .catch((error: any) => this.handleError(error));
  }

  private handleResponse(res: any): any {
    return res.json();
  }

  private handleError(error: any) {
    return Observable.throw(error || 'Internal server error');
  }
}
