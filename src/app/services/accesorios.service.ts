import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccesoriosService {

  private url = 'http://localhost:3000';

  data = [
    {
    name:"Audifonos Apple Airpods Max",
    description: "Audinos de estudio",
    platform : "Apple",
    img: "./assets/images/earpods.jpeg"
  },
  {
    name:"Smartphone Apple Iphone 12 Pro",
    description: "Celular de alta gama",
    platform : "Apple",
    img: "./assets/images/iphone12pro.jpeg"
  },
  {
    name:"Smartphone Apple Iphone 12",
    description: "Celular de gama media ",
    platform : "Apple",
    img: "./assets/images/iphone12.jpeg"

},
{
  name:"Smartphone Samsung S22",
  description: "Celular de alta gama",
  platform : "Samsung",
  img: "./assets/images/samsungs22.jpeg"
},
{
name:"Tv Lg + Soundbard",
description: "Televisión pantalla LCD",
platform : "Lg",
img: "./assets/images/tv.jpeg"
},
{
  name:"Mac Mini",
  description: "Mac Mini m1-8 GPU8/ 8GB",
  platform : "Apple",
  img: "./assets/images/macpc.jpeg"
  }
]

  constructor(private http: HttpClient) { }

 
getDatav2(){
  return this.http.get(this.url + '/products')
}

sendAccesorio(accesorios:any){
  return this.http.post(this.url + '/product', accesorios);
}

updateAccesorio(accesorios:any){
  return this.http.put(`${this.url}/product/${accesorios.id}`, accesorios)
}

getAccesorio(id:any){
  return this.http.get(`${this.url}/product/${id}`);
}

}
