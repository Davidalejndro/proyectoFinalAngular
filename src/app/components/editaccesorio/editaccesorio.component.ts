import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccesoriosService} from 'src/app/services/accesorios.service'
  
@Component({
  selector: 'app-editaccesorio',
  templateUrl: './editaccesorio.component.html',
  styleUrls: ['./editaccesorio.component.css']
})
export class EditaccesorioComponent implements OnInit {

  forma:FormGroup;
  id:any;

  constructor(private fb:FormBuilder, 
              private accesoriosService: AccesoriosService, 
              private router: ActivatedRoute, 
              private _router:Router) {
                this.forma = this.fb.group({
                  titulo:['', [Validators.required, Validators.minLength(2)]],
                  descripcion:['', [Validators.required, Validators.minLength(2)]],
                  plataforma:['', [Validators.required, Validators.minLength(2)]],
                  imagen:['', [Validators.required]]
                });
               }

  ngOnInit(): void {
    this.router.params.subscribe( paramsId =>{
      this.id = paramsId['id'];
    })
    this.accesoriosService.getAccesorio(this.id).subscribe(resp =>{
      console.log(resp);
      this.cargarData(resp);
    })
  }

  guardar(){
    let obj = {
      id: this.id,
      name: this.forma.get('titulo')?.value,
      description: this.forma.get('descripcion')?.value,
      platform: this.forma.get('plataforma')?.value,
      img: "./assets/images/" + this.forma.get('imagen')?.value
    }
    this.accesoriosService.updateAccesorio(obj).subscribe(respuesta =>{
      console.log(respuesta);
    });
    this._router.navigate(['/accesorios']);

  }

  cargarData(accesorios:any){
    let mydata = accesorios.mensaje;
    this.forma =  this.fb.group({
      titulo: [mydata.name],
      descripcion: [mydata.description],
      plataforma: [mydata.platform],
      imagen: [mydata.img]
    })

  }

}
