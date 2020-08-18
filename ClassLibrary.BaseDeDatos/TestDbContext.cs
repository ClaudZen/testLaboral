using ClassLibrary.BaseDeDatos.Entidades;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace ClassLibrary.BaseDeDatos
{
    public class TestDbContext : DbContext
    {
        public TestDbContext(DbContextOptions<TestDbContext> options) : base(options)
        {

        }
        public DbSet<Trabajador> Trabajadores { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            var trabajadores = new List<Trabajador>() {
                new Trabajador() {Id=1,Rut="17926611-3",Nombre="Pepe",Apellido="Soto",FechaNacimiento=new DateTime(1997,7,20), 
                    Email="pepe.soto@gmail.com",Telefono="+56912323122",Ciudad="Región Metropolitana de Santiago",Comuna="Cerrillos",Direccion="salvador 123",Genero='M',Activo =true,Departamento="RR.HH" },
                new Trabajador() {Id=2,Rut="14296750-2",Nombre="Juan",Apellido="Salazar",FechaNacimiento=new DateTime(1995,5,12),
                    Email="juan.salazar@gmail.com",Telefono="+56912345622",Ciudad="Región Metropolitana de Santiago",Comuna="Cerro Navia",Direccion="rauli 321",Genero='M',Activo =true ,Departamento="Desarrollo" },
                new Trabajador() {Id=3,Rut="9332793-4",Nombre="José ",Apellido="Ruíz",FechaNacimiento=new DateTime(1990,2,13),
                    Email="jose.ruiz@gmail.com",Telefono="+56913245622",Ciudad="Región Metropolitana de Santiago",Comuna="Conchalí",Direccion="cordoba 123",Genero='M',Activo =true,Departamento="Marketing"  },
                new Trabajador() {Id=4,Rut="14421337-8",Nombre="Fernanda",Apellido="Carrera",FechaNacimiento=new DateTime(2000,8,25),
                    Email="fernanda.carrera@gmail.com",Telefono="+56912678922",Ciudad="Región Metropolitana de Santiago",Comuna="El Bosque",Direccion="esmeralda 321",Genero='F',Activo =true,Departamento="Soporte"  }
            };

            modelBuilder.Entity<Trabajador>().HasData(trabajadores.ToArray());
        }
    }
}
