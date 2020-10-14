document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    //console.log("Dispositivo pronto:");
    //console.log(navigator.camera);

    $("#mnFoto").click(function(){
          const opcoes = {
          };

          var  sucesso = function(imageData){
            let lista = $("#lista-fotos");

            lista.append("<li><img src='data:image/jpeg;base64," + imageData+"'></li>");

            
            
                


          };
          var erro = function(mensagem){
              console.log(mensagem);
          };


          navigator.camera.getPicture(sucesso, erro, opcoes);

    });

}





$(document).ready(function(){
    $('.sidenav').sidenav();
    //console.log("Interface Pronta:");
    //console.log(navigator.camera);
});