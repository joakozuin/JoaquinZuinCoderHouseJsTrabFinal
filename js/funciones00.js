//Carga los Usuarios del localStorage
// o los crea desde un objeto literal
//Esta funcion se puede usar para cargar datos
//cuando no se dispone de una APIres
// setear parámetro en variGlob00.js
//-----------------------------------------------
let cargarUsuarios = () => {
    tbUsuariosAjax =[];

    const usuariosLS = localStorage.getItem("usuarios");

     //tbU= JSON.parse(usuariosLS);

    //console.log(`Dentro de carga usuarios:${tbU.length()} `);

    if ((usuariosLS === null) || (JSON.parse(usuariosLS).length===0) ) {

        let cantUs=3;
        let ind = 0;
        do {
            const us = new Usuario(bUsuarios[ind].idUs,bUsuarios[ind].nombre, bUsuarios[ind].apellido, bUsuarios[ind].email,
                bUsuarios[ind].telef, bUsuarios[ind].usuario,bUsuarios[ind].passw, bUsuarios[ind].direccion,
                bUsuarios[ind].edad, bUsuarios[ind].estado);
    
                tbUsuariosAjax.push(us);
            ind++;
 
        } while (ind < cantUs)

        idUs=bUsuarios[ind-1].idUs;   

        console.log(`Carga los usuarios desde objetos literales, último id:${idUs}`);

        actualizarUsuariosLS(tbUsuariosAjax);

    } else {
        tbU= JSON.parse(usuariosLS);

        //Transforma los objetos Json en Objetos para poder acceder a sus metodos
        //********************************************************************* */
        let cantUs=tbU.length;
        let ind = 0;
        do {
            const us = new Usuario(tbU[ind].idUs,tbU[ind].nombre,tbU[ind].apellido,tbU[ind].email,
                tbU[ind].telefono, tbU[ind].usuario,tbU[ind].password, tbU[ind].direccion,
                tbU[ind].edad, tbU[ind].estado);
    
                tbUsuariosAjax.push(us);
            ind++;
         
        } while (ind < cantUs)

        idUs= tbU[ind-1].idUs;
        
        console.log(`Carga los usuarios desde el localStorage, último id:${idUs}`);
    }
   

};



//Actualiza Usuarios en el localStorage
//---------------------------------------------
function actualizarUsuariosLS(usuarios) {
	const usuariosJSON = JSON.stringify(usuarios);
	localStorage.setItem("usuarios", usuariosJSON);
}

//Lista usuarios solo por consola
//--------------------------------
const listarUsuarios = (tbUs,texto) => {

    console.log( `${texto}\n------------------`);

    for (let us of tbUs){
        
        let estado;
        if(us.estado){
         estado="activo";
        }else{
         estado="Inactivo";
        }

        console.log( `Nombre Completo del Usuario:${us.nombreCompleto()}\n
        e-mail:${us.email}\n
        Telefono:${us.telefono}\n
        Usuario:${us.usuario}\n
        Password:${us.password}\n
        Dirección:${us.direccion}\n
        Edad:${us.edad}\n
        estado:${estado}\n\n`);
    
        console.log( `---------------`);
    }
    console.log( `-----------------------------------------------\n\n`);
};


//Componente para listar objetos Ordenados por Nombre
//----------------------------------------------------
function sortXnombre(a, b) {

    // convierte a mayuscula para uniformizar por el tema del case-sensitive
    //----------------------------------------------------------------------
    const nombre1 = a.nombre.toUpperCase();
    const nombre2 = b.nombre.toUpperCase();

    let comp = 0;

    if (nombre1 > nombre2) {
        comp = 1;
    } else if (nombre1 < nombre2) {
        comp = -1;
    }
    return comp;
}


const listarUsOrdNombre = (tbUs,text) => {

 
    const tbUsuariosAx=tbUs.slice(); //copia el array de objetos
    
    //Ordena por nombre usando funcion flecha
    //---------------------------------------
    tbUsuariosAx.sort((a,b)=>{return(a.nombre.toUpperCase()>b.nombre.toUpperCase()) ? 1 : -1});
   
    //Ordena por nombre funcion declarada
    //-----------------------------------
    //tbUsuariosAx.sort(sortXnombre);

    listarUsuarios(tbUsuariosAx,text);

   //Lista los usuarios utilizando el Dom
   //------------------------------------
   listarUsuariosDom(tbUsuariosAx,text);

};


//Componente para listar objetos Ordenados por Edad
//----------------------------------------------------
const listarUsOrdEdad = (tbUs,text) => {


    const tbUsuariosAx=tbUs.slice(); //copia el array de objetos

    tbUsuariosAx.sort((a,b)=>a.edad - b.edad); //ordena por la edad
 
    //Lista los usuarios en la consola
    //--------------------------------
    listarUsuarios(tbUsuariosAx,text);


    //Lista los usuarios utilizando el Dom
    //************************************ */
    listarUsuariosDom(tbUsuariosAx,text);

};

//Recargar página
//----------------
let refrescar=()=>{location.reload};




