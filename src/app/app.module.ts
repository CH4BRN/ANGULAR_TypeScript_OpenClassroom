import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service'
import { InstrumentsService } from './services/instruments.service'
import { AuthService } from './services/auth.service'
import { UserService } from './services/user.service'
import { from } from 'rxjs';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component'
import { Routes } from '@angular/router'
import { RouterModule } from '@angular/router';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { InstrumentComponent } from './instrument/instrument.component';
import { InstrumentsViewComponent } from './instruments-view/instruments-view.component';
import { AuthGuard } from './services/auth-guard.service';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';



const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent },
  { path: 'instruments', canActivate: [AuthGuard], component: InstrumentsViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent },
  { path: 'users', canActivate: [AuthGuard], component: UserListComponent },
  { path: 'new-user', canActivate:[AuthGuard], component: NewUserComponent},
  //  Error
  { path: 'not-found', component: FourOhFourComponent },
  //  Nothing
  { path: '**', redirectTo: 'not-found' }
]

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    InstrumentComponent,
    InstrumentsViewComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    InstrumentsService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
