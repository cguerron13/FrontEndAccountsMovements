import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { AsyncPipe, CurrencyPipe, NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormControl} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import {MatTableModule} from '@angular/material/table';


import { PersonaService } from './services/persona.service';
import { Persona } from './interfaces/personaModel';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];



@Component({
  selector: 'app-root',
  standalone: true,
  imports        : [RouterOutlet, NgIf, MatFormFieldModule, MatIconModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, NgFor, NgTemplateOutlet, MatPaginatorModule, NgClass, MatSlideToggleModule, MatSelectModule, MatOptionModule, MatCheckboxModule, MatRippleModule, AsyncPipe, MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'AccountMovementsWeb';
  personaRespuesta!: Persona;


  displayedColumns: string[] = ['tipo', 'detalle', 'valor'];
  dataSource = ELEMENT_DATA;

  activarBtn = false
  clickBtn = false



  searchInputControl: UntypedFormControl = new UntypedFormControl();


  constructor(
    private personaService:PersonaService)
{ }


  applyFilter(event: any) {

    if (event.key === 'Tab' || event.key === 'Enter' || event.keyCode == 9) {
      this.buscarPorCedula()
    }
  }



  buscarPorCedula(){
    debugger;

    this.clickBtn = true;


    let ruc = this.searchInputControl.value;

    console.log("ruc--------------->", ruc )
    if(ruc.length == 9){
      this.activarBtn = true
      console.log("--------------------->")

      this.personaService.obtenerPersona(ruc).subscribe({
        next:(persona => {
          if(persona){
            this.personaRespuesta = persona
            console.log(this.personaRespuesta)

          }else {
            // this.snackBar.open("success",'Persona no se encontro',{
            //   verticalPosition: 'top',
            //   duration:3000
            // })


          }
        }),
        error:(err)=>console.log(err)
      })
    }else {
      this.activarBtn = false
    }





  }
}
