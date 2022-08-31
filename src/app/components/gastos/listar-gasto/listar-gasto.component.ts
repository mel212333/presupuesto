import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit {

  presupuesto: number;
  restante: number;
  listGastos: any[] =[];

  constructor(private _presupuestoService: PresupuestoService) {
    
    this.presupuesto = 0;
    this.restante = 0;
    this._presupuestoService.getGastos().subscribe(data =>{
      console.log(data);
      this.restante = this.restante - data.cantidad;
      this.listGastos.push(data)
     })
   }

  ngOnInit(): void {
    this.presupuesto = this._presupuestoService.presupuesto;
    this.restante = this._presupuestoService.restante;
  }

  aplicarColorRestante(){
    if(this.presupuesto/4 > this.restante){
      return 'alert alert-danger';
    }else if(this.presupuesto/2 > this.restante){
      return 'alert alert-warning';
    }else{
      return 'alert alert-secondary'
    }
  }
}
