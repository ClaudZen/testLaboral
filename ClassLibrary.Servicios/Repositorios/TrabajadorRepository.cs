using AutoMapper;
using AutoMapper.QueryableExtensions;
using ClassLibrary.BaseDeDatos;
using ClassLibrary.BaseDeDatos.Entidades;
using ClassLibrary.Servicios.Interfaces;
using ClassLibrary.Servicios.Modelos;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary.Servicios.Repositorios
{
    public class TrabajadorRepository : ITrabajadorRepository
    {
        private readonly TestDbContext _context;
        private readonly IMapper _mapper;
        public TrabajadorRepository(TestDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<TrabajadorRowModel> AgregarTrabajador(TrabajadorCreateOrEditModel model)
        {
            var entidad = _mapper.Map<Trabajador>(model);
            _context.Trabajadores.Add(entidad);
            await _context.SaveChangesAsync();
            var result = _mapper.Map<TrabajadorRowModel>(entidad);
            return result;
        }

        public async Task<TrabajadorRowModel> EditarTrabajador(int id, TrabajadorCreateOrEditModel model)
        {
            var entidad = _context.Trabajadores.FirstOrDefault(x => x.Id == id);
            if (entidad == null) return null;
            _mapper.Map(model, entidad);
            await _context.SaveChangesAsync();
            var result = _mapper.Map<TrabajadorRowModel>(entidad);
            return result;
        }

        public async Task EliminarTrabajador(int id)
        {
            var entidad = _context.Trabajadores.FirstOrDefault(x => x.Id == id);
            if (entidad == null) return;

            _context.Trabajadores.Remove(entidad);
            await _context.SaveChangesAsync();
        }

        public async Task<TrabajadorCreateOrEditModel> ObtenerTrabajadoPorId(int id)
        {
            var entidad = await _context.Trabajadores.FirstOrDefaultAsync(x => x.Id == id);
            if (entidad == null) return null;
            var result = _mapper.Map<TrabajadorCreateOrEditModel>(entidad);
            return result;
        }

        public IEnumerable<TrabajadorRowModel> ObtenerTrabajadores()
        {
            var result = _context.Trabajadores
                .Select(x => new TrabajadorRowModel()
                {
                    Id = x.Id,
                    Rut = x.Rut,
                    NombreCompleto = $"{x.Nombre} {x.Apellido}",
                    Email = x.Email,
                    Departamento = x.Departamento,
                    Activo = x.Activo
                }).ToList();
            return result;
        }
    }
}
