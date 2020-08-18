using System;
using System.Collections.Generic;
using System.Text;

namespace ClassLibrary.Servicios.Modelos
{
   public class TrabajadorRowModel
    {
        public int Id { get; set; }
        public string Rut { get; set; }
        public string NombreCompleto { get; set; }
        public string Email { get; set; }
        public string Departamento { get; set; }
        public bool Activo { get; set; }
    }
}
