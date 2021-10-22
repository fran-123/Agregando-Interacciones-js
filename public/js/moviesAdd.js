window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    /* ----------- */

    titulo.addEventListener('mouseover',()=>{
        titulo.style.color = "red"
    })

    const tituloPeli = document.getElementById('titulo');

    let estadoSecreto = 0;


    tituloPeli.addEventListener("keyup", function(e){
        

           switch (true) {
            case e.key == "s" && estadoSecreto == 0:
                ++estadoSecreto
                break;
                case e.key == "e" && estadoSecreto == 1:
                ++estadoSecreto
                break;
                case e.key == "c" && estadoSecreto == 2:
                ++estadoSecreto
                break;
                case e.key == "r" && estadoSecreto == 3:
                ++estadoSecreto
                break;
                case e.key == "e" && estadoSecreto == 4:
                ++estadoSecreto
                break;
                case e.key == "t" && estadoSecreto == 5:
                ++estadoSecreto
                break;
                case e.key == "o" && estadoSecreto == 6:
                    alert("ESTADO SECRETO")
                    estadoSecreto = 0
                break;
                default:
                    estadoSecreto = 0
                break;
       }
       
    })



}