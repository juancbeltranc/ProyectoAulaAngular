import { Component, OnInit } from '@angular/core';
import{Campania} from 'src/app/models/campania'
import {CampaniaService} from 'src/app/services/campania.service'

@Component({
  selector: 'app-campania-list',
  templateUrl: './campania-list.component.html',
  styleUrls: ['./campania-list.component.css']
})
export class CampaniaListComponent implements OnInit {

  campania?: Campania[];
  currentTutorial: Campania = {};
  currentIndex = -1;
  title = '';

  constructor(private campaniaService: CampaniaService) { }

  ngOnInit(): void {
    this.retrieveCampania();
  }
  retrieveCampania(): void {
    this.campaniaService.getAll()
      .subscribe({
        next: (data) => {
          this.campania = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveCampania();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveCampania(tutorial: Campania, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllCampania(): void {
    this.campaniaService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

}
