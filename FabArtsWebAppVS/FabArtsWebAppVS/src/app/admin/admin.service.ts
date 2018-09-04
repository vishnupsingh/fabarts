import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Response } from '@angular/http';
//import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { BlogData } from '../shared/BlogData';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Options } from 'selenium-webdriver/chrome';
@Injectable()
export class AdminService {
  url: string = '/api/blogpost/';

  constructor(private http: HttpClient) { }

  upload(blogData: BlogData) {
    return this.http
      .post('/api/blogpost', blogData);
  }

  uploadPost(blogData: BlogData): Observable<BlogData> {
    console.log('In Service Observable');
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('/api/blogpost', blogData, { headers: headers })
      .map(res => res)
      .catch(this.handleErrorObservable); 
  }

  //uploadWithPromise(blogData: BlogData): Promise<BlogData> {
  //  //let headers = new Headers({ 'Content-Type': 'application/json' });
  //  //let options = new RequestOptions({ headers: headers });
    //  //return this.http.post(this.url, blogData, options).toPromise()
  //  //  .then(this.extractData)
  //  //  .catch(this.handleErrorPromise);
  //}

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
