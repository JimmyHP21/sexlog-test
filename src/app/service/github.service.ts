import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, pipe, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class GithubService {
  apiURL: string = environment.gitUrl;

  constructor(private _http: HttpClient) {}

  searchUser(username: string): Observable<any> {
    return this._http.get<any>(this.apiURL + username)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse): any {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
