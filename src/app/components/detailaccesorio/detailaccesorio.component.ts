import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccesoriosService } from 'src/app/services/accesorios.service';

@Component({
  selector: 'app-detailaccesorio',
  templateUrl: './detailaccesorio.component.html',
  styleUrls: ['./detailaccesorio.component.css']
})
export class DetailaccesorioComponent implements OnInit {

  accesorios:any;
  id:any;
  constructor(private activateRouter: ActivatedRoute, 
              private accesoriosServices: AccesoriosService) {
                this.activateRouter.params.subscribe(data =>{
                  this.id = data['id'];
                  this.accesoriosServices.getAccesorio(this.id).subscribe( resp =>{
                    let data: any = resp;
                    this.accesorios = data.mensaje;
                  })
                })
               }

  ngOnInit(): void {
  }

}
