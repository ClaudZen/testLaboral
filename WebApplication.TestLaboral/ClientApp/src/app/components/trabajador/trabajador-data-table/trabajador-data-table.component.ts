import { Component, OnInit, ViewChild } from '@angular/core';
import { ItrabajadorCreateOrEdit, ItrabajadorRow } from '../../../interfaces/itrabajador'
import { TrabajadorDialogComponent } from '../trabajador-dialog/trabajador-dialog.component'
import { TrabajadorService } from '../../../services/trabajador.service'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-trabajador-data-table',
  templateUrl: './trabajador-data-table.component.html',
  styleUrls: ['./trabajador-data-table.component.css']
})
export class TrabajadorDataTableComponent implements OnInit {

  dataSource = new MatTableDataSource<ItrabajadorRow>();
  displayedColumns: string[] = ['rut', 'nombreCompleto', 'email', 'departamento', 'activo', 'acciones'];
  endPosition: MatSnackBarHorizontalPosition = 'end';
  topPosition: MatSnackBarVerticalPosition = 'top';

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private _trabajadorService: TrabajadorService,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.poblarTabla();
    this.dataSource.paginator = this.paginator;
  }

  mostrarSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: this.topPosition,
      horizontalPosition: this.endPosition,
    });
  }

  poblarTabla() {
    this._trabajadorService.obtenerTrabajadores().subscribe((result) => {
      this.dataSource.data = result
    });
  }

  addTrabajador(modelo: ItrabajadorCreateOrEdit) {
   
    this._trabajadorService.crearTrabajador(modelo).subscribe((result) => {
      console.log(result);
      this.dataSource.data.push(result);
      this.dataSource.filter = "";
      this.mostrarSnackBar('El trabajador fue', "Creado")
    });
  }

  deleteTrabajador(id) {
    this._trabajadorService.eliminarTrabajador(id);
    this.dataSource.data = this.dataSource.data.filter((o: ItrabajadorRow) => {
      return o.id !== id ? o : false;
    })
    this.mostrarSnackBar('El trabajador fue', "Eliminado")
  }

  editTrabajador(modelo: ItrabajadorCreateOrEdit) {
    this._trabajadorService.editarTrabajador(modelo).subscribe((result: ItrabajadorRow) => {

      this.dataSource.data = this.dataSource.data.map((o: ItrabajadorRow) => {
        if (o.id === result.id) {
          o = result;
        }
        return o;
      })
      this.mostrarSnackBar('El trabajador fue', "Editado")
    });;
  }

  abrirAddDialog() {
   
    this.abrirDialog(null);
  }

  abrirEditDialog(id: number) {
    this._trabajadorService.obtenerTrabajador(id).subscribe(result => {
      this.abrirDialog(result);
    });
  }

  abrirDialog(dataModel: any): void {

    const dialogRef = this._dialog.open(TrabajadorDialogComponent, {
      data: dataModel,
      width: '500px',
      autoFocus: false
    });
    dialogRef.beforeClosed().subscribe(result => {
      
      if (result != null) {
        result.rut = result.rut.replace('.', '');
        result.telefono = '+569'+result.telefono
        if (result.id == 0) {
          console.log(result);
          this.addTrabajador(result);
        } else {
          this.editTrabajador(result);
        }
      }

    });
   }


}
