import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VodkaService } from '../services/vodka.service';

@Component({
  selector: 'app-vodka',
  standalone: true,
  imports: [RouterLink, HttpClientModule],
  providers:[VodkaService],
  templateUrl: './vodka.component.html',
  styleUrl: './vodka.component.css'
})
export class VodkaComponent implements OnInit {
  vodka: any[]=[];

  constructor(private vodkaService: VodkaService){}
    ngOnInit(): void{
      this.vodkaService.vodkaCoctel().subscribe(datos =>{
        this.vodka=datos.drinks;
      })
    }
  }


