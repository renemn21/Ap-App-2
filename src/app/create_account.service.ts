import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { CreateAccount } from './create_account';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CreateAccountService {
    private _url: string = "http://localhost8080/create_account";
    constructor(private http: HttpClient) { }

    postCreate_account(data:any) {
        return this.http.post<CreateAccount>(this._url,data);
    }
}
