import { Component, OnInit, Input } from '@angular/core';
import{User} from 'src/app/models/user'
import {UsuarioService} from 'src/app/services/usuario.service'

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
  constructor() { }

  ngOnInit(): void {
  }

}
