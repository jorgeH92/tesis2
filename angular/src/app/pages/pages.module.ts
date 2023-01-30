import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RegistrarProveedorComponent } from './compras/proveedor/registrar-proveedor/registrar-proveedor.component';
import { ListadoProveedorComponent } from './compras/proveedor/listado-proveedor/listado-proveedor.component';
import { EditarProveedorComponent } from './compras/proveedor/editar-proveedor/editar-proveedor.component';
import { RegistroMateriaComponent } from './inventarios/materiaprima/registro-materia/registro-materia.component';
import { ListadoMateriaComponent } from './inventarios/materiaprima/listado-materia/listado-materia.component';
import { CategoriaMateriaComponent } from './inventarios/materiaprima/categoria-materia/categoria-materia.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    RegistrarProveedorComponent,
    ListadoProveedorComponent,
    EditarProveedorComponent,
    RegistroMateriaComponent,
    ListadoMateriaComponent,
    CategoriaMateriaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
    RegistrarProveedorComponent,
    ListadoProveedorComponent,
    EditarProveedorComponent,
    RegistroMateriaComponent
      ]
})
export class PagesModule { }
