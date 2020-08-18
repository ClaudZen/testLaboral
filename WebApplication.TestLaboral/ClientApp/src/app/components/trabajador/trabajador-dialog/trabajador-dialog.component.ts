import { Component, OnInit, Inject, ViewChild,ElementRef} from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import { TrabajadorService } from '../../../services/trabajador.service'
import { ItrabajadorCreateOrEdit } from '../../../interfaces/itrabajador'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';
import { RutValidator } from '../../../helpers/rut-filter'
interface pais {
  region: string;
  comunas: string[]
}
@Component({
  selector: 'app-trabajador-dialog',
  templateUrl: './trabajador-dialog.component.html',
  styleUrls: ['./trabajador-dialog.component.css']
})
export class TrabajadorDialogComponent implements OnInit {


  pais: pais[] = [
    {
      region: "Región Metropolitana de Santiago",
      comunas: [
        "Cerrillos",
        "Cerro Navia",
        "Conchalí",
        "El Bosque",
        "Estación Central",
        "Huechuraba",
        "Independencia",
        "La Cisterna",
        "La Florida",
        "La Granja",
        "La Pintana",
        "La Reina",
        "Las Condes",
        "Lo Barnechea",
        "Lo Espejo",
        "Lo Prado",
        "Macul",
        "Maipú",
        "Ñuñoa",
        "Pedro Aguirre Cerda",
        "Peñalolén",
        "Providencia",
        "Pudahuel",
        "Quilicura",
        "Quinta Normal",
        "Recoleta",
        "Renca",
        "Santiago",
        "San Joaquín",
        "San Miguel",
        "San Ramón",
        "Vitacura",
        "Puente Alto",
        "Pirque",
        "San José de Maipo",
        "Colina",
        "Lampa",
        "Tiltil",
        "San Bernardo",
        "Buin",
        "Calera de Tango",
        "Paine",
        "Melipilla",
        "Alhué",
        "Curacaví",
        "María Pinto",
        "San Pedro",
        "Talagante",
        "El Monte",
        "Isla de Maipo",
        "Padre Hurtado",
        "Peñaflor"
      ]
    },
    {
      region: "Tarapacá",
      comunas: [
        "Iquique",
        "Alto Hospicio",
        "Pozo Almonte",
        "Camiña",
        "Colchane",
        "Huara",
        "Pica"
      ]
    },
    {
      region: "Antofagasta",
      comunas: [
        "Antofagasta",
        "Mejillones",
        "Sierra Gorda",
        "Taltal",
        "Calama",
        "Ollagüe",
        "San Pedro de Atacama",
        "Tocopilla",
        "María Elena"
      ]
    },
    {
      region: "Atacama",
      comunas: [
        "Copiapó",
        "Caldera",
        "Tierra Amarilla",
        "Chañaral",
        "Diego de Almagro",
        "Vallenar",
        "Alto del Carmen",
        "Freirina",
        "Huasco"
      ]
    },
    {
      region: "Coquimbo",
      comunas: [
        "La Serena",
        "Coquimbo",
        "Andacollo",
        "La Higuera",
        "Paiguano",
        "Vicuña",
        "Illapel",
        "Canela",
        "Los Vilos",
        "Salamanca",
        "Ovalle",
        "Combarbalá",
        "Monte Patria",
        "Punitaqui",
        "Río Hurtado"
      ]
    },
    {
      region: "Valparaíso",
      comunas: [
        "Valparaíso",
        "Casablanca",
        "Concón",
        "Juan Fernández",
        "Puchuncaví",
        "Quintero",
        "Viña del Mar",
        "Isla de Pascua",
        "Los Andes",
        "Calle Larga",
        "Rinconada",
        "San Esteban",
        "La Ligua",
        "Cabildo",
        "Papudo",
        "Petorca",
        "Zapallar",
        "Quillota",
        "Calera",
        "Hijuelas",
        "La Cruz",
        "Nogales",
        "San Antonio",
        "Algarrobo",
        "Cartagena",
        "El Quisco",
        "El Tabo",
        "Santo Domingo",
        "San Felipe",
        "Catemu",
        "Llaillay",
        "Panquehue",
        "Putaendo",
        "Santa María",
        "Quilpué",
        "Limache",
        "Olmué",
        "Villa Alemana"
      ]
    },
    {
      region: "Región del Libertador Gral. Bernardo O’Higgins",
      comunas: [
        "Rancagua",
        "Codegua",
        "Coinco",
        "Coltauco",
        "Doñihue",
        "Graneros",
        "Las Cabras",
        "Machalí",
        "Malloa",
        "San Francisco de Mostazal",
        "Olivar",
        "Peumo",
        "Pichidegua",
        "Quinta de Tilcoco",
        "Rengo",
        "Requínoa",
        "San Vicente de Tagua Tagua",
        "Pichilemu",
        "La Estrella",
        "Litueche",
        "Marchihue",
        "Navidad",
        "Paredones",
        "San Fernando",
        "Chépica",
        "Chimbarongo",
        "Lolol",
        "Nancagua",
        "Palmilla",
        "Peralillo",
        "Placilla",
        "Pumanque",
        "Santa Cruz"
      ]
    },
    {
      region: "Región del Maule",
      comunas: [
        "Talca",
        "Constitución",
        "Curepto",
        "Empedrado",
        "Maule",
        "Pelarco",
        "Pencahue",
        "Río Claro",
        "San Clemente",
        "San Rafael",
        "Cauquenes",
        "Chanco",
        "Pelluhue",
        "Curicó",
        "Hualañé",
        "Licantén",
        "Molina",
        "Rauco",
        "Romeral",
        "Sagrada Familia",
        "Teno",
        "Vichuquén",
        "Linares",
        "Colbún",
        "Longaví",
        "Parral",
        "Retiro",
        "San Javier de Loncomilla",
        "Villa Alegre",
        "Yerbas Buenas"
      ]
    },
    {
      region: "Región del Biobío",
      comunas: [
        "Concepción",
        "Coronel",
        "Chiguayante",
        "Florida",
        "Hualqui",
        "Lota",
        "Penco",
        "San Pedro de la Paz",
        "Santa Juana",
        "Talcahuano",
        "Tomé",
        "Hualpén",
        "Lebu",
        "Arauco",
        "Cañete",
        "Contulmo",
        "Curanilahue",
        "Los Álamos",
        "Tirúa",
        "Los Ángeles",
        "Antuco",
        "Cabrero",
        "Laja",
        "Mulchén",
        "Nacimiento",
        "Negrete",
        "Quilaco",
        "Quilleco",
        "San Rosendo",
        "Santa Bárbara",
        "Tucapel",
        "Yumbel",
        "Alto Biobío"
      ]
    },
    {
      region: "Región de la Araucanía",
      comunas: [
        "Temuco",
        "Carahue",
        "Cunco",
        "Curarrehue",
        "Freire",
        "Galvarino",
        "Gorbea",
        "Lautaro",
        "Loncoche",
        "Melipeuco",
        "Nueva Imperial",
        "Padre las Casas",
        "Perquenco",
        "Pitrufquén",
        "Pucón",
        "Saavedra",
        "Teodoro Schmidt",
        "Toltén",
        "Vilcún",
        "Villarrica",
        "Cholchol",
        "Angol",
        "Collipulli",
        "Curacautín",
        "Ercilla",
        "Lonquimay",
        "Los Sauces",
        "Lumaco",
        "Purén",
        "Renaico",
        "Traiguén",
        "Victoria"
      ]
    },
    {
      region: "Región de Los Ríos",
      comunas: [
        "Valdivia",
        "Corral",
        "Lanco",
        "Los Lagos",
        "Máfil",
        "Mariquina",
        "Paillaco",
        "Panguipulli",
        "La Unión",
        "Futrono",
        "Lago Ranco",
        "Río Bueno"
      ]
    },
    {
      region: "Región de Los Lagos",
      comunas: [
        "Puerto Montt",
        "Calbuco",
        "Cochamó",
        "Fresia",
        "Frutillar",
        "Los Muermos",
        "Llanquihue",
        "Maullín",
        "Puerto Varas",
        "Castro",
        "Ancud",
        "Chonchi",
        "Curaco de Vélez",
        "Dalcahue",
        "Puqueldón",
        "Queilén",
        "Quellón",
        "Quemchi",
        "Quinchao",
        "Osorno",
        "Puerto Octay",
        "Purranque",
        "Puyehue",
        "Río Negro",
        "San Juan de la Costa",
        "San Pablo",
        "Chaitén",
        "Futaleufú",
        "Hualaihué",
        "Palena"
      ]
    },
    {
      region: "Región Aisén del Gral. Carlos Ibáñez del Campo",
      comunas: [
        "Coihaique",
        "Lago Verde",
        "Aisén",
        "Cisnes",
        "Guaitecas",
        "Cochrane",
        "O’Higgins",
        "Tortel",
        "Chile Chico",
        "Río Ibáñez"
      ]
    },
    {
      region: "Región de Magallanes y de la Antártica Chilena",
      comunas: [
        "Punta Arenas",
        "Laguna Blanca",
        "Río Verde",
        "San Gregorio",
        "Cabo de Hornos (Ex Navarino)",
        "Antártica",
        "Porvenir",
        "Primavera",
        "Timaukel",
        "Natales",
        "Torres del Paine"
      ]
    },

    {
      region: "Arica y Parinacota",
      comunas: ["Arica", "Camarones", "Putre", "General Lagos"]
    },

    {
      region: "Región de Ñuble",
      comunas: [
        "Cobquecura",
        "Coelemu",
        "Ninhue",
        "Portezuelo",
        "Quirihue",
        "Ránquil",
        "Treguaco",
        "Bulnes",
        "Chillán Viejo",
        "Chillán",
        "El Carmen",
        "Pemuco",
        "Pinto",
        "Quillón",
        "San Ignacio",
        "Yungay",
        "Coihueco",
        "Ñiquén",
        "San Carlos",
        "San Fabián",
        "San Nicolás"
      ]
    }
  ];
  comunas: string[];
  departamentos = ['RR.HH', 'Soporte', 'Desarrollo', 'Marketing'];
  titulo: string;
  matcher = new MyErrorStateMatcher();
  disabledComuna = false;
  constructor(
    private _dialogRef: MatDialogRef<ItrabajadorCreateOrEdit>,
    @Inject(MAT_DIALOG_DATA) private data: ItrabajadorCreateOrEdit,
    private _trabajadorService: TrabajadorService,
    private _formBuilder:FormBuilder,
  ) {
    
  }
  @ViewChild('myInputRut') myInputRut: ElementRef;

  

  trabajadorForm = this._formBuilder.group({
    id: [this.data!=null?this.data.id:0],
    rut: [this.data != null ?this.data.rut:'', [Validators.required, RutValidator()]],
    nombre: [this.data != null ? this.data.nombre : '', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    apellido: [this.data != null ? this.data.apellido : '', [Validators.required, , Validators.minLength(3), Validators.maxLength(10)]],
    fechaNacimiento: [this.data != null ? this.data.fechaNacimiento : null, [Validators.required]],
    email: [this.data != null ? this.data.email : '', [Validators.required, Validators.email]],
    telefono: [this.data != null ? this.data.telefono.substr(4, this.data.telefono.length) : '', [Validators.required, Validators.min(10000000), Validators.max(99999999)]],
    ciudad: [this.data != null ? this.data.ciudad:'', [Validators.required]],
    departamento: [this.data != null ? this.data.departamento : '', [Validators.required]],
    comuna: [this.data != null ? this.data.comuna : '', [Validators.required]],
    direccion: [this.data != null ? this.data.direccion : '', [Validators.required]],
    genero: [this.data != null ? this.data.genero : 'M', [Validators.required]],
    activo: [this.data != null ? this.data.activo : false, [Validators.required]],
  })

  get rut() { return this.trabajadorForm.get('rut'); }
  get nombre() { return this.trabajadorForm.get('nombre'); }
  get apellido() { return this.trabajadorForm.get('apellido'); }
  get fechaNacimiento() { return this.trabajadorForm.get('fechaNacimiento'); }
  get email() { return this.trabajadorForm.get('email'); }

  get telefono() { return this.trabajadorForm.get('telefono'); }
  get ciudad() { return this.trabajadorForm.get('ciudad'); }
  get departamento() { return this.trabajadorForm.get('departamento'); }
  get comuna() { return this.trabajadorForm.get('comuna'); }

  get direccion() { return this.trabajadorForm.get('direccion'); }
  get genero() { return this.trabajadorForm.get('genero'); }
  get activo() { return this.trabajadorForm.get('activo'); }

  ngOnInit(): void {
    this.titulo = this.data == null ? "Agregar" : "Editar";

    this.onChangeRegion(this.ciudad.value)
    this.rut.valueChanges.subscribe((value: string) => {
      if (value) {

        var sinPuntos = value.replace(/\./g, "");
        var actualLimpio = sinPuntos.replace(/-/g, "");
        var inicio = actualLimpio.substring(0, actualLimpio.length - 1);
        var rutPuntos = "";
        var i = 0;
        var j = 1;
        for (i = inicio.length - 1; i >= 0; i--) {
          var letra = inicio.charAt(i);
          rutPuntos = letra + rutPuntos;
          if (j % 3 == 0 && j <= inicio.length - 1) {
            rutPuntos = "." + rutPuntos;
          }
          j++;
        }
        var dv = actualLimpio.substring(actualLimpio.length - 1);
        rutPuntos = rutPuntos + "-" + dv;
       
       
        this.myInputRut.nativeElement.value = rutPuntos
        this.rut.setValue(rutPuntos, { emitEvent: false });
      }
    });
    
  }

  onNoClick(): void {
    this._dialogRef.close();
  }

  onSaveForm() {
    if (this.trabajadorForm.valid) {
      this._dialogRef.close(this.trabajadorForm.value);
    }
  }
  onChangeRegion(region: string) {
    
    let dropDownData = this.pais.find((data: pais) => data.region === region);
    if (dropDownData) {
      this.comunas = dropDownData.comunas;
      if (this.comunas) {
        if (this.comuna.value=='') {
          this.comuna.setValue(this.comunas[0]);
        }
        
      }
      this.disabledComuna = false;
    } else {
      this.disabledComuna = true;
      this.comunas = [];
    }
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
