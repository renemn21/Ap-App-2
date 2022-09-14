import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateAccounrService } from '../create_account.service';
import { CreateAccount } from '../create_account';

@Component({ 
    selector: 'create_account-root',
    templateUrl: './create_account.component.html',
    styleUrls: [ './create_account.component.css' ]
})
export class CreateAccountComponent implements OnInit {
    studenAccounts: CreateAccount[] = [];
    constructor(private _createAccountService: CreateAccountService) { }

    
    ngOnInit(): void {
        this.createAccountForm = new FormGroup({
            firstName: new FormControl('', [Validators.required]), 
            lastName:  new FormControl('', [Validators.required]),
            phoneNum:  new FormControl('', [Validators.required]),
            email:  new FormControl('', [Validators.required]),
            highschool:  new FormControl('', [Validators.required]),
            birthday:  new FormControl('', [Validators.required]),
            address:  new FormControl('', [Validators.required]),
            address2:  new FormControl('', [Validators.required]),
            password:  new FormControl('', [Validators.required])
        });
        this._createAccountService.getCreateAccount;
        .subscribe(data => this.CreateAccount = data);
    
    }

}/