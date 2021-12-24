//Definicion de tipos de Datos
//----------------------------


//Objetos literales usuario, Tabla usuarios BD
//--------------------------------------------
const bUsuarios = [{
    idUs:0,
    nombre: "Daniel",
    apellido: "Mendoza",
    email: "danmza@gmail.com",
    telef:"(261) 4976543",
    usuario:"dani",
    passw: "1234",
    direccion: "Buenos Aires 23",
    edad: 48,
    estado:true
},
{
    idUs:1,
    nombre: "Gabriela",
    apellido: "Bustamante",
    email: "gabybus@gmail.com",
    telef:"(261) 4987098",
    usuario:"gaby",
    passw: "7989",
    direccion: "Rioja 3456",
    edad: 23,
    estado:false
},
{
    idUs:2,
    nombre: "Ezequiel",
    apellido: "Moreno",
    email: "ezemor@gmail.com",
    telef:"(261) 4970245",
    usuario:"ezi",
    passw: "8765",
    direccion: "Lavalle 2345",
    edad: 31,
    estado:true
}
]

//Clase Usuario
//-------------
class Usuario {
    constructor(id,nombre, apellido, email, telefono,usuario,password, direccion, edad, estado=false) {
        this.idUs=id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.usuario=usuario;
        this.password = password;
        this.direccion = direccion;
        this.edad = edad;
        this.estado = estado;
        this.nombreCompl = "";
    }
    
    nombreCompleto() {
        this.nombreCompl = this.nombre + " " + this.apellido;
        return this.nombreCompl;
    }
    cambiarEstado() {
        this.estado = !this.estado;
    }
    id() {
        return this.idUs;
    }
}
