import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrarProveedorComponent } from './compras/proveedor/registrar-proveedor/registrar-proveedor.component';
import { ListadoProveedorComponent } from './compras/proveedor/listado-proveedor/listado-proveedor.component';
import { EditarProveedorComponent } from './compras/proveedor/editar-proveedor/editar-proveedor.component';

import { RegistroMateriaComponent } from './inventarios/materiaprima/registro-materia/registro-materia.component';
import { ListadoMateriaComponent } from './inventarios/materiaprima/listado-materia/listado-materia.component';
import { CategoriaMateriaComponent } from './inventarios/materiaprima/categoria-materia/categoria-materia.component';
import { OtroComponent } from './inventarios/otros/otro/otro.component';

const routes:Routes=[
  {path:'dashboard', component:PagesComponent,
  children:[
    {path:'', component:DashboardComponent},
    {path:'registrar-proveedor', component:RegistrarProveedorComponent},
    {path:'listado-proveedor', component:ListadoProveedorComponent},
    {path:'editar-proveedor', component:EditarProveedorComponent},

    {path:'registro-materia', component:RegistroMateriaComponent},
    {path:'listado-materia', component:ListadoMateriaComponent},
    {path:'categoria-materia', component:CategoriaMateriaComponent},
    {path:'otro', component:OtroComponent},


      ]
}
]


@NgModule({
 
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
