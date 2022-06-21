import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccesoriosService } from 'src/app/services/accesorios.service';


@Component({
  selector: 'app-addarticulo',
  templateUrl: './addarticulo.component.html',
  styleUrls: ['./addarticulo.component.css']
})
export class AddarticuloComponent implements OnInit {

  forma: FormGroup;

  constructor(private fb:FormBuilder, 
              private accesoriosService:AccesoriosService, 
              private router: Router) { 
    this.forma = this.fb.group({
      titulo:['', [Validators.required, Validators.minLength(2)]],
      descripcion:['', [Validators.required, Validators.minLength(2)]],
      plataforma:['', [Validators.required, Validators.minLength(2)]],
      imagen:['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  guardar(){
    this.crearAccesorio();
  }

  crearAccesorio(){
    let obj = {
      name: this.forma.get('titulo')?.value,
      description: this.forma.get('descripcion')?.value,
      platform: this.forma.get('plataforma')?.value,
      img: "./assets/images/" + this.forma.get('imagen')?.value
    }
    this.accesoriosService.sendAccesorio(obj).subscribe(respuesta =>{
      console.log(respuesta);
    });
    this.router.navigate(['/accesorios']);
  }

}
