
   
//Funciones empleando Jquery
//--------------------------
   
let confirmar = function(titulo,dato,callback){

    
    const $modalConfirForm=new bootstrap.Modal($d.querySelector("#confirModal"));
   
    $modalConfirForm.show();
   
    $('.confirTit').text(titulo);
   
   
    $("#modConfBtn-si").on("click", function(){

        console.log(` Ejecuta la callBack ${titulo}`)
        $("#confirModal").modal('hide');
        callback(dato);

    });

   
    
   $("#modConfBtn-no").on("click", function(){
    
      console.log(` no se pudo hacer ${titulo}`)
      $("#confirModal").modal('hide');
      alerta("No se pudo ejecutar la operación",false);


    });


  };

  let alerta=function(mensaje,confirm){

    const $modalAlertForm=new bootstrap.Modal($d.querySelector("#alertModal"));

   console.log(`tipo de alerta: ${confirm}`);

    if(confirm){

        $('.fondAlertTit').addClass("bg-success");
        $('.alertTit').text(mensaje);
        $modalAlertForm.show();

    }else{

        $('.fondAlertTit').addClass("bg-danger");
        $('.alertTit').text(mensaje);
        $modalAlertForm.show();

    }
  };