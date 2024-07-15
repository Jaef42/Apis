import {  HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CoctelesService } from '../services/cocteles.service';

@Component({
  selector: 'app-margarita',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  providers:[CoctelesService],
  templateUrl: './margarita.component.html',
  styleUrl: './margarita.component.css'
})
export class MargaritaComponent implements OnInit{
  cocteles: any[]=[];
  constructor(private coctelServicio: CoctelesService){}
    ngOnInit(): void{
      this.coctelServicio.obtenerCocteles().subscribe(datos =>{
        this.cocteles = datos.drinks;
      });
    }

}
