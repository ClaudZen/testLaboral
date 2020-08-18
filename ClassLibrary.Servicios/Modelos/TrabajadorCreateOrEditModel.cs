using System;
using System.Collections.Generic;
using System.Text;

namespace ClassLibrary.Servicios.Modelos
{
    public class TrabajadorCreateOrEditModel
    {
        public int Id { get; set; }
        public string Rut { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public string Email { get; set; }
        public string Telefono { get; set; }
        public string Ciudad { get; set; }
        public string Departamento { get; set; }
        public string Comuna { get; set; }
        public string Direccion { get; set; }
        public char   Genero { get; set; }
        public bool   Activo { get; set; }
    }
}
