import { Injectable, Inject } from '@angular/core';
import { ItrabajadorRow, ItrabajadorCreateOrEdit } from '../interfaces/itrabajador';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {
  constructor(protected http: HttpClient, @Inject('BASE_URL') protected baseUrl: string) {
  }
  //muestra los errores por consola
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Un error ha ocurrido:', error.error.message);
    } else {
      console.error(
        `Codigo back end ${error.status}, ` +
        `error: ${error.error}`);
    }
    return throwError(
      'Error fatal');
  };
  //configuración para peticiones http
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  //obtiene todos los trabajaores del web api
  obtenerTrabajadores(): Observable<ItrabajadorRow[]> {
    return this.http.get<ItrabajadorRow[]>((this.baseUrl + 'trabajador/listar'), this.httpOptions);
  }
  //obtiene trabajador por id del web api
  obtenerTrabajador(id: number): Observable<ItrabajadorCreateOrEdit> {
    return this.http.get<ItrabajadorCreateOrEdit>((this.baseUrl + 'trabajador/'+id), this.httpOptions);
  }
  //crea el trabajador
  crearTrabajador(item: ItrabajadorCreateOrEdit): Observable<ItrabajadorRow> {
    return this.http.post<ItrabajadorRow>((this.baseUrl + 'trabajador/agregar'), item, this.httpOptions);
  }
  //edita el trabajador
  editarTrabajador(item: ItrabajadorCreateOrEdit): Observable<ItrabajadorRow> {
   
    return this.http.put<ItrabajadorRow>((this.baseUrl + 'trabajador/'+item.id), item, this.httpOptions);
  }
  //elimina el trabajador
  eliminarTrabajador(id: number): void {
    this.http.delete((this.baseUrl + 'trabajador/' + id), this.httpOptions).toPromise();
  }
}
