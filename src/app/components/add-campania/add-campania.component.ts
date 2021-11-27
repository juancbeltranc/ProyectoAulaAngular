import { Component, OnInit } from '@angular/core';
import { Campania } from 'src/app/models/campania';
import { CampaniaService } from 'src/app/services/campania.service';

@Component({
  selector: 'app-add-campania',
  templateUrl: './add-campania.component.html',
  styleUrls: ['./add-campania.component.css']
})
export class AddCampaniaComponent implements OnInit {
  campania: Campania = {
    numCampana: 0,
    anio: 0 ,
    mes: "",
    dia: 0,
    nombre:""
};
submitted = false;

  constructor(private campaniaService: CampaniaService) { }

  ngOnInit(): void {
  }
  saveCampania(): void {
    const data = {
      numCampana: this.campania.numCampana,
      anio: this.campania.anio,
      mes: this.campania.mes,
      dia: this.campania.dia,
      nombre: this.campania.nombre
    };

    this.campaniaService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newCampania(): void {
    this.submitted = false;
    this.campania = {
      numCampana: 0,
      anio: 0 ,
      mes: "",
      dia: 0,
      nombre:""
    };
  }

}
