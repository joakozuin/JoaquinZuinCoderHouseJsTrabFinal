
//Componente para listar objetos en una tabla del DOM
//Listado ordenado por nombre o edad
//----------------------------------------------------
function listarUsuariosDom(tbUs,texto) {

    
    //Se debe volver a reasignar el arreglo despues de las ordenaciones
    //sino queda desactualizado el arreglo de referencia que es utilizado
    //para editar y borrar
    //****************************************************************
    tbUsuariosAjax=tbUs.slice(); //copia el array de objetos

    const $h4 = $d.querySelector(".subtitulo");
    $h4.textContent=texto;
   
    const $contenedor = $d.querySelector('tbody');
          $contenedor.textContent="";

     $template = $d.getElementById("pantillaCrud").content;
     let $fragmento=$d.createDocumentFragment();

     let id2=0;

     tbUs.forEach( us => {

        if (us.estado) {

            $template.querySelector(".id").textContent = us.idUs;
            $template.querySelector(".nombre").textContent = us.nombreCompleto();
            $template.querySelector(".edad").textContent = us.edad;
            $template.querySelector(".email").textContent = us.email;
            $template.querySelector(".direccion").textContent = us.direccion;
            $template.querySelector(".telefono").textContent = us.telefono;
            $template.querySelector(".estado").textContent = `Activo`;

            $template.querySelector(".btnEditar").dataset.id=us.idUs;
            $template.querySelector(".btnBorrar").dataset.id=us.idUs;
            
            //Guardamos la posición del arreglo ademas del id del objeto
            //esto se emplea si no se trabaja con BD
            //-------------------------------------------------------------
            $template.querySelector(".btnEditar").dataset.id1=id2;
            $template.querySelector(".btnBorrar").dataset.id1=id2;
            
        } else {

            $template.querySelector(".id").textContent = us.idUs;
            $template.querySelector(".nombre").textContent = us.nombreCompleto();
            $template.querySelector(".edad").textContent = us.edad;
            $template.querySelector(".email").textContent = us.email;
            $template.querySelector(".direccion").textContent = us.direccion;
            $template.querySelector(".telefono").textContent = us.telefono;
            $template.querySelector(".estado").textContent = `Inactivo`;

            $template.querySelector(".btnEditar").dataset.id=us.idUs;
            $template.querySelector(".btnBorrar").dataset.id=us.idUs;

            //Guardamos la posición del arreglo ademas del id del objeto
            //esto se emplea si no se trabaja con BD
            //-------------------------------------------------------------
            $template.querySelector(".btnEditar").dataset.id1=id2;
            $template.querySelector(".btnBorrar").dataset.id1=id2;
        }

        id2++;

        let $clone = $d.importNode($template, true);
        $fragmento.appendChild($clone);
    });
        $contenedor.appendChild($fragmento);
}



//Carga y lista los usuarios desde la ApiRest
//-------------------------------------------
function listarUsuariosDomAjax(texto) {

    const $h4 = $d.querySelector(".subtitulo");
    $h4.textContent = texto;

    const $contenedor = $d.querySelector('tbody');
    $contenedor.textContent = "";

    $template = $d.getElementById("pantillaCrud").content;
    let $fragmento = $d.createDocumentFragment();

    let id2 = 0;

    tbUsuariosAjax =[];

    ajax({
        //APIrest de donde se cosumen los datos
        //
        url: urlAPI,
        metodo: "GET",
        respuesta: (res) => {

            console.log(res);

            //Transforma los objetos Json en Objetos para poder acceder a sus metodos
            //********************************************************************* */
            let cantUs = res.length;
            let ind = 0;
            do {
                const us = new Usuario(res[ind].id, res[ind].nombre, res[ind].apellido, res[ind].email,
                    res[ind].telefono, res[ind].usuario, res[ind].password, res[ind].direccion,
                    res[ind].edad, res[ind].estado);

                tbUsuariosAjax.push(us);
                ind++;

            } while (ind < cantUs)

            id = res[ind - 1].id;

            tbUsuariosAjax.forEach(us => {

                if (us.estado) {

                    $template.querySelector(".id").textContent = us.idUs;
                    $template.querySelector(".nombre").textContent = us.nombreCompleto();
                    $template.querySelector(".edad").textContent = us.edad;
                    $template.querySelector(".email").textContent = us.email;
                    $template.querySelector(".direccion").textContent = us.direccion;
                    $template.querySelector(".telefono").textContent = us.telefono;
                    $template.querySelector(".estado").textContent = `Activo`;

                    $template.querySelector(".btnEditar").dataset.id = us.idUs;
                    $template.querySelector(".btnBorrar").dataset.id = us.idUs;

                   //Guardamos la posición del arreglo ademas del id del objeto
                   //esto se emplea si no se trabaja con BD
                   //-------------------------------------------------------------
                    $template.querySelector(".btnEditar").dataset.id1 = id2;
                    $template.querySelector(".btnBorrar").dataset.id1 = id2;

                } else {

                    $template.querySelector(".id").textContent = us.idUs;
                    $template.querySelector(".nombre").textContent = us.nombreCompleto();
                    $template.querySelector(".edad").textContent = us.edad;
                    $template.querySelector(".email").textContent = us.email;
                    $template.querySelector(".direccion").textContent = us.direccion;
                    $template.querySelector(".telefono").textContent = us.telefono;
                    $template.querySelector(".estado").textContent = `Inactivo`;

                    $template.querySelector(".btnEditar").dataset.id = us.idUs;
                    $template.querySelector(".btnBorrar").dataset.id = us.idUs;

                  //Guardamos la posición del arreglo ademas del id del objeto
                  //esto se emplea si no se trabaja con BD
                  //-------------------------------------------------------------
                    $template.querySelector(".btnEditar").dataset.id1 = id2;
                    $template.querySelector(".btnBorrar").dataset.id1 = id2;
                }

                id2++;

                let $clone = $d.importNode($template, true);
                $fragmento.appendChild($clone);
            });
            $contenedor.appendChild($fragmento);
        },

        error: (err) => {
            console.log(err);
            //$tabla.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
            alertaCargar(`${err}, No se cargaron los usuarios`,false);
        },

        datos: null
    })


}




//Captura el click de los botones (editar-borrar)
//de la tabla listado de usuarios.
//-----------------------------------------------
let $idForm = 0;
let $idReg=0;
$d.addEventListener("click", e => {

    if (e.target.matches(".btnEditar")) { //Boton Editar

       $idForm = e.target.dataset.id1;
       $idReg=e.target.dataset.id;

       let titulo=`¿Está seguro de Editar el Usuario id= ${e.target.dataset.id} ?`;

       confirmarModif(titulo,$idForm,regEditar);

    }


    if (e.target.matches(".btnBorrar")) { //Boton Borrar

        let id = e.target.dataset.id;
        let id1 = e.target.dataset.id1;

        let titulo=`¿Está seguro de Borrar el Usuario id= ${e.target.dataset.id} ?`;

        if(usoLocalStorage===0){
    
         confirmarBorrar(titulo,id,regBorrar);

        }

        if(usoLocalStorage===1){
    
            confirmarBorrar(titulo,id1,regBorrar);
   
           }

    }
})



//CallBack para borrar un registro
//********************************
let regBorrar=(id)=>{

    $modalModForm.hide();

    if(usoLocalStorage===1){
    
        tbUsuariosAjax.splice(id, 1);

        listarUsuarios(tbUsuariosAjax, "LocalStorage:Listado de Usuario.");

        //Actualiza los usuarios del localStorage
        //************************************ */
        actualizarUsuariosLS(tbUsuariosAjax);

        if (tbUsuariosAjax.length > 0) {
            //Lista los usuarios utilizando el Dom
            //************************************ 
            alertaBorrar("Local Storage: El usuario fue eliminado con éxito", true);

            listarUsuariosDom(tbUsuariosAjax, "LocalStorage:Listado de Usuario.");
            //location.reload();

        }else{

            alertaBorrar("Local Storage: Esta vacio cargue nuevos usuarios", false);

            listarUsuariosDom(tbUsuariosAjax, "LocalStorage:Listado de Usuario.");
            //location.reload();  
        };
    }

    if(usoLocalStorage===0){

            //Borrar - DELETE
            ajax({
                url: `${urlAPI}/${id}`,
                metodo: "DELETE",
                respuesta: (res) =>{

                    alertaBorrar("BD APIrest: Se Borró el usuario con éxito",true);
                    listarUsuariosDomAjax("BD APIrest:Listado de Usuarios.");
                    //location.reload();

                },
                error: (err) =>{

                    alertaBorrar(`${err},BD APIrest No se Borró el usuario`,false);
                },
                datos: {
                    nombre:null,
                    apellido:null
                }

            });


     }
    }



//CallBack para editar un registro
//********************************     
let regEditar=($idForm)=>{

        console.log($idForm);

        $modForm[0].value = tbUsuariosAjax[$idForm].nombre;
        $modForm[1].value = tbUsuariosAjax[$idForm].apellido;
        $modForm[2].value = tbUsuariosAjax[$idForm].email;
        $modForm[3].value = tbUsuariosAjax[$idForm].telefono;
        $modForm[4].value = tbUsuariosAjax[$idForm].usuario;
        $modForm[5].value = tbUsuariosAjax[$idForm].password;
        $modForm[6].value = tbUsuariosAjax[$idForm].direccion;
        $modForm[7].value = tbUsuariosAjax[$idForm].edad;

        let estado;

        if (tbUsuariosAjax[$idForm].estado) {
            estado = "Activo";
        } else {
            estado = "Inactivo";
        }

        $modForm[8].value = estado;

        $modalModForm.show();

       //alerta(" Editado el Usuario",editar);

    
}




//Componentes para Agregar un usuario
//-----------------------------------
$agUs.addEventListener("click", agregarUS);

function agregarUS() {

    $agrForm[0].value = "";
    $agrForm[1].value = "";
    $agrForm[2].value = "";
    $agrForm[3].value = "";
    $agrForm[4].value = "";
    $agrForm[5].value = "";
    $agrForm[6].value = "";
    $agrForm[7].value = "";

    $modalAgrForm.show();

}



//Formulario para Agregar Usuarios
//----------------------------------------------
$agrForm.addEventListener('submit', (e) => {
    e.preventDefault();
    idUs++;
    let id = idUs;
    let nomb = $agrForm[0].value;
    let apell = $agrForm[1].value;
    let email = $agrForm[2].value;
    let telef = $agrForm[3].value;
    let usuar = $agrForm[4].value;
    let passw = $agrForm[5].value;
    let direc = $agrForm[6].value;
    let edad = $agrForm[7].value;

    
    if(usoLocalStorage===0){
     //Crear - POST
     ajax({
        url: urlAPI,
        metodo: "POST",
        respuesta: (res) => {

            alertaAgregar("BD APIrest: Se Agregó el usuario con éxito BD",true);
            $modalAgrForm.hide();
            listarUsuariosDomAjax("BD APIrest: Listado de Usuarios.");
            //location.reload();
        },
        error: (err) => {

            //$tabla.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
            alertaAgregar(`${err}, No se Agregó el usuario a la BD`,false);
            $modalAgrForm.hide();

        },
        datos: {
            nombre: nomb,
            apellido: apell,
            email:email,
            telefono:telef,
            usuario:usuar,
            password:passw,
            direccion:direc,
            edad:edad,
            estado:false
        }
    });
         $modalAgrForm.hide();
    }

    if (usoLocalStorage === 1) {

        const us = new Usuario(id, nomb, apell, email, telef, usuar, passw, direc, edad);
        tbUsuariosAjax.push(us);

        //Lista los usuarios utilizando console
        //
        listarUsuarios(tbUsuariosAjax, "LocalStorage:Listado de Usuario.");

        //Actualiza los usuarios del localStorage
        //
        actualizarUsuariosLS(tbUsuariosAjax);

        //Lista los usuarios utilizando el Dom
        //
        listarUsuariosDom(tbUsuariosAjax, "LocalStorage:Listado de Usuario.")


        alertaAgregar("LocalStorage: Se Agregó el usuario con éxito.", true);

        $modalAgrForm.hide();

    }

})

//Fin Agregar usuario
//--------------------


//Formulario para Editar Usuarios
//----------------------------------------------
  $modForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let estado;

       if (usoLocalStorage === 0) {
           if ($modForm[8].value == "Activo" || $modForm[8].value == "activo") {
            
               estado = true;
           } else {
            
               estado = false;
           }

           console.log(`El id del registro: ${$idReg}`);

           //Editar - PUT
           ajax({
               url: `${urlAPI}/${$idReg}`,
               metodo: "PUT",
               respuesta: (res) => {

                   alertaModificar("BD APIrest: Se Editó el usuario con éxito", true);
                   $modalModForm.hide();
                   listarUsuariosDomAjax("BD APIrest: Listado de Usuarios.");
                   //location.reload();
               },
               error: (err) => {

                   //$tabla.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
                   alertaModificar(`${err}, No se Editó el usuario`, false);
                   $modalModForm.hide();

               },
               datos: {
                   nombre: $modForm[0].value,
                   apellido: $modForm[1].value,
                   email: $modForm[2].value,
                   telefono: $modForm[3].value,
                   usuario: $modForm[4].value,
                   password: $modForm[5].value,
                   direccion: $modForm[6].value,
                   edad: $modForm[7].value,
                   estado: estado
               }
           });

           $modalModForm.hide();
       }

       if (usoLocalStorage === 1) {

           tbUsuariosAjax[$idForm].nombre = $modForm[0].value;
           tbUsuariosAjax[$idForm].apellido = $modForm[1].value;
           tbUsuariosAjax[$idForm].email = $modForm[2].value;
           tbUsuariosAjax[$idForm].telefono = $modForm[3].value;
           tbUsuariosAjax[$idForm].usuario = $modForm[4].value;
           tbUsuariosAjax[$idForm].password = $modForm[5].value;
           tbUsuariosAjax[$idForm].direccion = $modForm[6].value;
           tbUsuariosAjax[$idForm].edad = $modForm[7].value;

           if ($modForm[8].value == "Activo" || $modForm[8].value == "activo") {
               tbUsuariosAjax[$idForm].estado = true;

           } else {
               tbUsuariosAjax[$idForm].estado = false;

           }

           //Lista los usuarios utilizando console
           //
           listarUsuarios(tbUsuariosAjax, "LocalStorage:Listado de Usuario.");

           //Actualiza los usuarios del localStorage
           //
           actualizarUsuariosLS(tbUsuariosAjax);

           //Lista los usuarios utilizando el Dom
           //
           listarUsuariosDom(tbUsuariosAjax, "LocalStorage:Listado de Usuario.")


           alertaModificar("LocalStorage: Se ha modificado el Usuario con éxito", true);

           $modalModForm.hide();
       }
  })
  //Fin Formulario Editar un usuario
  //




 //Funciones Listar usuarios
 //-------------------------
 $listUs.onclick = () => {

     if (usoLocalStorage === 0) {
         texto = "BD APIrest:Listado de Usuarios.";
         listarUsuariosDomAjax(texto);
     }

     if (usoLocalStorage === 1) {
         texto = "LocalStorage:Listado de Usuarios.";
         cargarUsuarios();
         listarUsuariosDom(tbUsuariosAjax, texto);
     }

     listarUsuarios(tbUsuariosAjax, texto);


 }

 $listUsNom.onclick = () => {

     let texto = "";

     if (usoLocalStorage === 0) {
         texto = "BD APIrest:Lista usuarios por Nombre.";
     }

     if (usoLocalStorage === 1) {
         texto = "LocalStorage:Lista usuarios por Nombre.";
     }

     listarUsOrdNombre(tbUsuariosAjax, texto);

 }

 $listUsEdad.onclick = () => {

     let texto = "";

     if (usoLocalStorage === 0) {
         texto = "BD APIrest:Lista usuarios por Edad.";
     }

     if (usoLocalStorage === 1) {
         texto = "LocalStorage:Lista usuarios por Edad.";
     }

     listarUsOrdEdad(tbUsuariosAjax, texto);

 }

 //Fin lista Usuarios Dom
 //-----------------------------------------------------