
   
//Funciones empleando Jquery
//--------------------------

let confirmarModif = function (titulo, dato, callback) {

  const $modalConfirFormMod = new bootstrap.Modal($d.querySelector("#confirModalMod"));

  $modalConfirFormMod.show();

  $('.modConfirTit').text(titulo);


  $("#modConfBtn-si").on("click", function () {

    console.log(` Ejecuta la callBack ${titulo}`)
    //$("#confirModal").modal('hide');
    $modalConfirFormMod.hide();
    callback(dato);

  });


  $("#modConfBtn-no").on("click", function () {

    console.log(` no se pudo hacer ${titulo}`)
    //$("#confirModal").modal('hide');
    $modalConfirFormMod.hide();
    alertaModificar("No se Modificó", false);


  });


};


let confirmarBorrar = function (titulo, dato, callback1) {

  const $modalConfirFormBorrar = new bootstrap.Modal($d.querySelector("#confirModalBorr"));

  $modalConfirFormBorrar.show();

  $('.borrarConfirTit').text(titulo);


  $("#borrarConfBtn-si").on("click", function () {

    console.log(` Ejecuta la callBack ${titulo}`)
    //$("#confirModal").modal('hide');
    $modalConfirFormBorrar.hide();
    callback1(dato);

  });


  $("#borrarConfBtn-no").on("click", function () {

    console.log(` no se pudo hacer ${titulo}`)
    //$("#confirModal").modal('hide');
    $modalConfirFormBorrar.hide();
    alertaBorrar("No se Borró", false);


  });


};



let alertaCargar = function (mensaje, confirm) {

  const $cargarModalAlertForm = new bootstrap.Modal($d.querySelector("#cargarAlertModal"));

  console.log(`tipo de alerta: ${confirm}`);

  

  if (confirm) {
    $('.cargarFondAlertTit').removeClass('bg-danger');
    $('.cargarFondAlertTit').addClass("bg-success");
    $('.cargarAlertTit').text(mensaje);
    $cargarModalAlertForm.show();
    
  } else {
    $('.cargarFondAlertTit').removeClass('bg-success');
    $('.cargarFondAlertTit').addClass("bg-danger");
    $('.cargarAlertTit').text(mensaje);
    $cargarModalAlertForm.show();
    
  };

  $("#btnCargarAlertaCerrar").on("click", function () {

    console.log(`Se cerro el Alerta Cargar`)
    $cargarModalAlertForm.hide();
    refrescar();

  });

};


let alertaBorrar = function (mensaje, confirm) {

  const $borrarModalAlertForm = new bootstrap.Modal($d.querySelector("#borrarAlertModal"));

  console.log(`tipo de alerta: ${confirm}`);


  if (confirm) {
    $('.borrarFondAlertTit').removeClass('bg-danger');
    $('.borrarFondAlertTit').addClass("bg-success");
    $('.borrarAlertTit').text(mensaje);
    $borrarModalAlertForm.show();

  } else {
    $('.borrarFondAlertTit').removeClass("bg-success");
    $('.borrarFondAlertTit').addClass('bg-danger');
    $('.borrarAlertTit').text(mensaje);
    $borrarModalAlertForm.show();

  };

  $("#btnCargarAlertaBorrar").on("click", function () {

    console.log(`Se cerro el Alerta Borrar`)
    $borrarModalAlertForm.hide();
    refrescar();

  });
 
};



let alertaModificar = function (mensaje, confirm) {

  const $modificarModalAlertForm = new bootstrap.Modal($d.querySelector("#modificarAlertModal"));

  console.log(`tipo de alerta: ${confirm}`);

  if (confirm) {
    console.log(`Alerta Modificar Verdad`)
    $('.modificarFondAlertTit').removeClass('bg-danger');
    $('.modificarFondAlertTit').addClass('bg-success');
    $('.modificarAlertTit').text(mensaje);
    $modificarModalAlertForm.show();
    
  } else {
    console.log(`Alerta Modificar Falso`)
    $('.modificarFondAlertTit').removeClass('bg-success');
    $('.modificarFondAlertTit').addClass('bg-danger');
    $('.modificarAlertTit').text(mensaje);
    $modificarModalAlertForm.show();
    
  }

  $("#btnCargarAlertaModificar").on("click", function () {

    console.log(`Se cerro el Alerta Modificar`)
    $modificarModalAlertForm.hide();
    refrescar();

  });

};



let alertaAgregar = function (mensaje, confirm) {

  const $agregarModalAlertForm = new bootstrap.Modal($d.querySelector("#agregarAlertModal"));

  console.log(`tipo de alerta: ${confirm}`);


  if (confirm) {
    $('.agregarFondAlertTit').removeClass('bg-danger');
    $('.agregarFondAlertTit').addClass("bg-success");
    $('.agregarAlertTit').text(mensaje);
    $agregarModalAlertForm.show();
    
  } else {
    $('.agregarFondAlertTit').removeClass('bg-success');
    $('.agregarFondAlertTit').addClass("bg-danger");
    $('.agregarAlertTit').text(mensaje);
    $agregarModalAlertForm.show();
    
  }

  $("#btnCargarAlertaAgregar").on("click", function () {

    console.log(`Se cerro el Alerta Agregar`)
    $agregarModalAlertForm.hide();
    refrescar();

  });

};