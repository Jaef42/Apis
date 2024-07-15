import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VinoService } from '../services/vino.service';

@Component({
  selector: 'app-vino',
  standalone: true,
  imports: [RouterLink, HttpClientModule],
  providers:[VinoService],
  templateUrl: './vino.component.html',
  styleUrl: './vino.component.css'
})
export class VinoComponent implements OnInit{
  vino: any[]=[];

  constructor(private vinoService: VinoService){}
  ngOnInit(): void {
    this.vinoService.vinoCoctel().subscribe(datos =>{
      this.vino=datos.drinks;
    })
  }

}
