import {AfterViewInit, Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-categoria-materia',
  templateUrl: './categoria-materia.component.html',
  styleUrls: ['./categoria-materia.component.css']
})
export class CategoriaMateriaComponent implements OnInit, AfterViewInit{

  constructor() { }
     ngAfterViewInit(): void{
 $('#example').DataTable( {
  'pageLength': 3,

  "language": {
    "url": "//cdn.datatables.net/plug-ins/1.13.1/i18n/es-ES.json"
  },

        dom: 'Bfrtip',
        buttons: [
            
        ]
    } );


  $('#example1').DataTable( {
  'pageLength': 3,

  "language": {
    "url": "//cdn.datatables.net/plug-ins/1.13.1/i18n/es-ES.json"
  },

        dom: 'Bfrtip',
        buttons: [
            
        ]
    } );
  }
  ngOnInit(): void {
  }

}
