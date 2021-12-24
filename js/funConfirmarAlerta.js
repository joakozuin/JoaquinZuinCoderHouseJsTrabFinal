
   
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
    alerta("No se pudo ejecutar la operación", false);


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
    alerta("No se pudo ejecutar la operación", false);


  });


};

let alertaCargar = function (mensaje, confirm) {

  const $cargarModalAlertForm = new bootstrap.Modal($d.querySelector("#cargarAlertModal"));

  console.log(`tipo de alerta: ${confirm}`);

  if (confirm) {

    $('.cargarFondAlertTit').addClass("bg-success");
    $('.cargarAlertTit').text(mensaje);
    $cargarModalAlertForm.show();

  } else {

    $('.cargarFondAlertTit').addClass("bg-danger");
    $('.cargarAlertTit').text(mensaje);
    $cargarModalAlertForm.show();

  }
};

let alertaBorrar = function (mensaje, confirm) {

  const $borrarModalAlertForm = new bootstrap.Modal($d.querySelector("#borrarAlertModal"));

  console.log(`tipo de alerta: ${confirm}`);

  if (confirm) {

    $('.borrarFondAlertTit').addClass("bg-success");
    $('.borrarAlertTit').text(mensaje);
    $borrarModalAlertForm.show();

  } else {

    $('.borrarFondAlertTit').addClass("bg-danger");
    $('.borrarAlertTit').text(mensaje);
    $borrarModalAlertForm.show();

  }
};

let alertaModificar = function (mensaje, confirm) {

  const $modificarModalAlertForm = new bootstrap.Modal($d.querySelector("#modificarAlertModal"));

  console.log(`tipo de alerta: ${confirm}`);

  if (confirm) {

    $('.modificarFondAlertTit').addClass("bg-success");
    $('.modificarAlertTit').text(mensaje);
    $modificarModalAlertForm.show();

  } else {

    $('.modificarFondAlertTit').addClass("bg-danger");
    $('.modificarAlertTit').text(mensaje);
    $modificarModalAlertForm.show();

  }
};

let alertaAgregar = function (mensaje, confirm) {

  const $agregarModalAlertForm = new bootstrap.Modal($d.querySelector("#agregarAlertModal"));

  console.log(`tipo de alerta: ${confirm}`);

  if (confirm) {

    $('.agregarFondAlertTit').addClass("bg-success");
    $('.agregarAlertTit').text(mensaje);
    $agregarModalAlertForm.show();

  } else {

    $('.agregarFondAlertTit').addClass("bg-danger");
    $('.agregarAlertTit').text(mensaje);
    $agregarModalAlertForm.show();

  }
};