import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const auth="/auth";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  loginGoogle(): Observable<boolean> {
    
  
    return this.http.get<{token: string}>('/auth/google', {})
      .pipe(
        map(result => {
          console.log(result);
          localStorage.setItem('access_token', result.token);
         
          return true;
        })
      );
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<{token: string,username:string,id:string,role:string}>('/auth/login', {email: email, password: password})
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          localStorage.setItem('user', result.username);
          localStorage.setItem('id', result.id);
          localStorage.setItem('role',result.role);

         
          return true;
        })
      );
  }
  signup(email: string, password: string,name: string): Observable<boolean> {
    return this.http.post<{token: string}>('/auth/signup', {email: email, password: password, name:name})
      .pipe(
        map(result => {        
          return true;
        })
      );
  }
   //info user
   getInforUser(): Observable<any> {
    
     return this.http.post<{}>('/auth/infor', {id: localStorage.getItem('id')})
      .pipe(
        map(result => {
          console.log(result);
          return result;
        })
      );
  }
  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    localStorage.removeItem('id');
    localStorage.removeItem('role');
  }

  public get loggedIn(): boolean {
  
    return (localStorage.getItem('access_token') !== null);
  }
  public get loggedCheckAdmin(): boolean {
  
    return (localStorage.getItem('role') === "admin");
  }
}
