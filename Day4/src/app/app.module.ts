import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './Component/nav/nav.component';
import { FooterComponent } from './Component/footer/footer.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './Component/error/error.component';
import { UserDetailsComponent } from './Component/user-details/user-details.component';
import { UserTableComponent } from './Component/user-table/user-table.component';
import { RouterModule, Routes } from '@angular/router';

let routes:Routes = [
  {path:"", component:RegistrationComponent},
  {path:"registration", component:RegistrationComponent},
  {path:"users", component:UserTableComponent},
  {path:"user/:id", component:UserDetailsComponent},
  {path:"**", component:ErrorComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    RegistrationComponent,
    ErrorComponent,
    UserDetailsComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
