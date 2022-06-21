import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "@auth0/auth0-angular";
import { AccesoriosComponent } from "./components/accesorios/accesorios.component";
import { AddarticuloComponent } from "./components/addarticulo/addarticulo.component";
import { DetailaccesorioComponent } from "./components/detailaccesorio/detailaccesorio.component";
import { EditaccesorioComponent } from "./components/editaccesorio/editaccesorio.component";
import { ItemsComponent } from "./components/items/items.component";
import { PlataformaComponent } from "./components/plataforma/plataforma.component";

const routes: Routes = [
    {path:'accesorios' ,component:AccesoriosComponent },
    {path:'addArticulo' ,component:AddarticuloComponent, canActivate:[AuthGuard] },
    {path:'editaccesorio/:id', component:EditaccesorioComponent},
    {path:'detail/:id', component:DetailaccesorioComponent},
    {path:'plataforma' ,component:PlataformaComponent, canActivate:[AuthGuard]  },
    {path:'items' ,component:ItemsComponent },
    {path:'' ,redirectTo:'accesorios', pathMatch:'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
   
})

export class AppRoutingModule{}