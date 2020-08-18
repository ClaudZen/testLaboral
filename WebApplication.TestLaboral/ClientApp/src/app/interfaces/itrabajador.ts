export interface ItrabajadorRow {
  id: number;
  rut: string;
  nombreCompleto: string;
  email: string;
  departamento: string;
  activo: boolean;
}
export interface ItrabajadorCreateOrEdit {
  id: number;
  rut: string;
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
  email: string;
  telefono: string;
  ciudad: string;
  departamento: string;
  comuna: string;
  direccion: string;
  genero: CharacterData;
  activo: boolean;
}
