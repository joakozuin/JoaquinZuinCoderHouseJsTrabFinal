

//Carga los usuarios disponibles
//desde objetos literales, de localStorage,
//cuando no se dispone de una APIrest
//metodo usado al inicio del curso
//-----------------------------------------
if (usoLocalStorage===1){
  let texto=" LocalStorage: Listado de Usuarios.";
  cargarUsuarios();
  listarUsuarios(tbUsuariosAjax,texto);
  listarUsuariosDom(tbUsuariosAjax,texto);
}
//-----------------------------------------  



//Consume y Lista los usuarios desde la APIrest
//se utiliza servidor gratuito https://mockapi.io
//se emplea tecnologia Ajax
//-----------------------------------------------
if(usoLocalStorage===0){

  let texto=" BD APIrest: Listado de Usuarios.";
   $d.addEventListener("DOMContentLoaded", listarUsuariosDomAjax(texto));

}

console.log(`lista Nuevo Arreglo--> ${tbUsuariosAjax}`)

//Animacion utilizando jQuery
//----------------------------
$("document").ready(function(){

 $("#infoTit").hide();

 $("#infoTit").fadeIn(2000,"linear");

  function mover(x,y){

    $(".divTit").animate({
        top:""+y+"px",
        left:""+x+"px"
    },{
      duration:4000
    });
  }

    mover(70,0);
  mover(30,0);
  mover(0,0);

});