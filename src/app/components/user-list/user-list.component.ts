import { Component, OnInit } from '@angular/core';
import{User} from 'src/app/models/user'
import {UsuarioService} from 'src/app/services/usuario.service'
 
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user?: User[];
  currentTutorial: User = {};
  currentIndex = -1;
  title = '';

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.retrieveUser();
  }
  retrieveUser(): void {
    this.usuarioService.getAll()
      .subscribe({
        next: (data) => {
          this.user = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveUser();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveUser(tutorial: User, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllUser(): void {
    this.usuarioService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

}
