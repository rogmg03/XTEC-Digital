import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DataTablesModule} from 'angular-datatables';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ForgotPswComponent } from './forgot-psw/forgot-psw.component';
import { AdminCursosComponent } from './admin-cursos/admin-cursos.component';
import { AdminCreatesemesterComponent } from './admin-createsemester/admin-createsemester.component';
const routes: Routes = [
  { path: 'not-found', component: NotFoundComponent},
  { path: 'login', component: LoginComponent},
  { path: 'password-recovery', component: ForgotPswComponent},
  { path: 'adminDashboard', component: AdminDashboardComponent},
  { path: 'adminCursos', component: AdminCursosComponent},
  { path: 'crearSemestre', component: AdminCreatesemesterComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    AdminDashboardComponent,
    ForgotPswComponent,
    AdminCursosComponent,
    AdminCreatesemesterComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
