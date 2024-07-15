import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TequilaService } from '../services/tequila.service';

@Component({
  selector: 'app-tequila',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  providers:[TequilaService],
  templateUrl: './tequila.component.html',
  styleUrl: './tequila.component.css'
})
export class TequilaComponent implements OnInit {
  tequila: any[]=[];
  constructor(private tequilaService: TequilaService){}
  ngOnInit(): void {
    this.tequilaService.tequilaCoctel().subscribe(datos =>{
      this.tequila = datos.drinks;
    })
  }

}
