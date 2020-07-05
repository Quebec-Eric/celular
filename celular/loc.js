const API_KEY = '5df0d7b4a8114f279185b82397996aea';


function fazerrec() {


    let xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.hgbrasil.com/weather?key=98c6cf0d&lat=-23.682&log=-46.875&user_ip=remote`);

    xhr.onload = ()=>{

   var c=document.getElementById("cidade").innerHTML=(xhr.cidade);
   var d=document.getElementById("data").innerHTML=(xhr.data);
   var t=document.getElementById("tempo").innerHTML=(xhr.time);
   var de=document.getElementById("descriptio").innerHTML=(xhr.description);
   var a=document.getElementById("atualmet").innerHTML=(xhr.atualmente);
   var a=document.getElementById("d2").innerHTML=(xhr.previsão.data);
   var a=document.getElementById("um").innerHTML=(xhr.previsão.umidade);
   var a=document.getElementById("win").innerHTML=(xhr.description);





    };
    console.log(Response)

    xhr.send()
}

document.getElementById('btnPesquisa').addEventListener('click', fazerrec);


