import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
    user: User = {
      cedula: "",
	    nombre: "",
	    apellido: "",
	    email: "",
	    telefono: 0,
	    direccion: "",
	    ciudad: "" 
  };
  submitted = false;
  constructor(private userService: UsuarioService) { }

  ngOnInit(): void {
  }
  saveUser(): void {
    const data = {
      cedula: this.user.cedula,
      nombre: this.user.nombre,
      apellido: this.user.apellido,
      telefono: this.user.telefono,
      direccion: this.user.direccion,
      ciudad: this.user.ciudad
    };

    this.userService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newUser(): void {
    this.submitted = false;
    this.user = {
      cedula: "",
	    nombre: "",
	    apellido: "",
	    email: "",
	    telefono: 0,
	    direccion: "",
	    ciudad: "" 
    };
  }

}
