using ClassLibrary.BaseDeDatos.Entidades;
using ClassLibrary.Servicios.Modelos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary.Servicios.Interfaces
{
    public interface ITrabajadorRepository
    {
        /// <summary>
        /// Obitiene todos los trabajadores
        /// </summary>
        /// <returns></returns>
        IEnumerable<TrabajadorRowModel> ObtenerTrabajadores();
        /// <summary>
        /// Obtiene el trabajador por id
        /// </summary>
        /// <returns></returns>
        Task<TrabajadorCreateOrEditModel> ObtenerTrabajadoPorId(int id);
        /// <summary>
        /// Agrega un trabajador a las base de datos
        /// </summary>
        /// <returns>El trabajador agregado</returns>
        Task<TrabajadorRowModel> AgregarTrabajador(TrabajadorCreateOrEditModel model);
        /// <summary>
        /// Edita un trabajador por id
        /// </summary>
        /// <returns>El trabajador editado</returns>
        Task<TrabajadorRowModel> EditarTrabajador(int id,TrabajadorCreateOrEditModel model);
        Task EliminarTrabajador(int id);
    }
}
