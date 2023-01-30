import {AfterViewInit, Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-listado-materia',
  templateUrl: './listado-materia.component.html',
  styleUrls: ['./listado-materia.component.css']
})
export class ListadoMateriaComponent implements OnInit, AfterViewInit {

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
