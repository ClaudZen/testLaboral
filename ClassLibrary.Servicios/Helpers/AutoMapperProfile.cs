using AutoMapper;
using ClassLibrary.BaseDeDatos.Entidades;
using ClassLibrary.Servicios.Modelos;
using System;
using System.Collections.Generic;
using System.Text;

namespace ClassLibrary.Servicios.Helpers
{
    public class AutoMapperProfile:Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Trabajador, TrabajadorRowModel>().ForMember(x=>x.NombreCompleto,z=>z.MapFrom(a=>$"{a.Nombre} {a.Apellido}"));
            CreateMap<Trabajador, TrabajadorCreateOrEditModel>();
            CreateMap<TrabajadorCreateOrEditModel, Trabajador>();
        }
    }
}
