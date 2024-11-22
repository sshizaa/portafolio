let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


var submenu = document.querySelector('.submenu');
var abrirmenu = document.querySelector('.logo');
abrirmenu.addEventListener('click',function(){
    submenu.classList.toggle('show');
})
document.addEventListener('click',function(e){
    if (submenu.classList.contains('show')
        && !submenu.contains(e.target)
    && !abrirmenu.contains(e.target)){
        submenu.classList.remove('show');
    }
})
