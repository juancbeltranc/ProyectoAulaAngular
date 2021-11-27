import { Component, OnInit, Input } from '@angular/core';
import{User} from 'src/app/models/user'
import {UsuarioService} from 'src/app/services/usuario.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentTutorial: User = {
    cedula: "",
	    nombre: "",
	    apellido: "",
	    email: "",
	    telefono: 0,
	    direccion: "",
	    ciudad: "" 
  };

  message = '';
  constructor(
    private userService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getUser(this.route.snapshot.params["id"]);
    }
  }

  getUser(id: string): void {
    this.userService.get(id)
      .subscribe({
        next: (data) => {
          this.currentTutorial = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }



  updateUser(): void {
    this.message = '';

    this.userService.update(this.currentTutorial.cedula, this.currentTutorial)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : '!El usuario fue modificado correctamente!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteUser(): void {
    this.userService.delete(this.currentTutorial.cedula)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/user']);
        },
        error: (e) => console.error(e)
      });
  }

}
