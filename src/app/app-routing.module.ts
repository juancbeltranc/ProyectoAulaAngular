import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from './components/user-list/user-list.component'
import {UserDetailsComponent} from './components/user-details/user-details.component'
import {AddUserComponent} from './components/add-user/add-user.component'
import {CampaniaListComponent} from './components/campania-list/campania-list.component'
import {CampaniaDetailsComponent} from './components/campania-details/campania-details.component'
import {AddCampaniaComponent} from './components/add-campania/add-campania.component'
const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'users/:cedula', component: UserDetailsComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: '', redirectTo: 'campania', pathMatch: 'full' },
  { path: 'campanias', component: CampaniaListComponent },
  { path: 'campanias/:numCampana', component: CampaniaDetailsComponent },
  { path: 'add-campania', component: AddCampaniaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
