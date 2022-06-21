import { Component, OnInit } from '@angular/core';
import { AccesoriosService } from '../../services/accesorios.service';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css']
})
export class AccesoriosComponent implements OnInit {
   accesorios:any;
   
  constructor(private accesoriosService: AccesoriosService) { }

  ngOnInit(): void {
    this.setUp();
    
  }
  setUp(){
      this.accesoriosService.getDatav2().subscribe( resp => {
      console.log("Respuesta servicio ::",resp);
      let aux:any =  resp;
      this.accesorios = aux.mensaje;
    })
  }


}
