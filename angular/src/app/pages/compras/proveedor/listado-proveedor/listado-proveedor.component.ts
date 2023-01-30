import {AfterViewInit, Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-listado-proveedor',
  templateUrl: './listado-proveedor.component.html',
  styleUrls: ['./listado-proveedor.component.css']
})
export class ListadoProveedorComponent implements OnInit,  AfterViewInit
{
  title = 'SIGFICEV';

  constructor() { }

   ngAfterViewInit(): void{
 $('#example').DataTable( {
  "language": {
    "url": "//cdn.datatables.net/plug-ins/1.13.1/i18n/es-ES.json"
  },

        dom: 'Bfrtip',
        buttons: [
            'copy', 'excel', 'pdf', 'print'
        ]
    } );
  }

  ngOnInit(): void {
  }

}
