//******************************
//Definicion variables Globales
//******************************
let tbUsuariosAjax =[];

let idUs=0;              //Maneja los id de la BD usuario


let usoLocalStorage=0  //=0 no utiliza localStorage, trabaja con APIres

                       //=1 utiliza localStorage, método utilizado
                       // al inicio del curso para el desarrollo de
                       // los desafios


//Variables Globales Manejo Dom
//------------------------------
const $d=document;   //document del DOM

const $agUs=$d.querySelector(".agreUs");//Boton

const $tabla = $d.querySelector("#tablaUsuarios");

//Formulario Modal para agregar
//------------------------------
const $modalAgrForm=new bootstrap.Modal($d.querySelector("#modalAgUsuario"));

const $listUs=$d.querySelector(".listUs");
const $listUsNom=$d.querySelector(".listUsNom");
const $listUsEdad=$d.querySelector(".listUsEdad");


//Formulario Modal para modificar
//------------------------------
const $modalModForm=new bootstrap.Modal($d.querySelector("#modalModUsuario"));

const $agrForm=$d.querySelector(".agrUsForm");//formulario para agregar
const $modForm=$d.querySelector(".modUsForm");//formulario para modificar