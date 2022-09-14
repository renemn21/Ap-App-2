import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';
import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { CreateAccountComponent } from './create_account';
import { AccountCreatedComponent } from './account_created';
import { CreateAccountService } from './create_account.service';

@NgModule({
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CreateAccountComponent,
    AccountCreatedComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { };
