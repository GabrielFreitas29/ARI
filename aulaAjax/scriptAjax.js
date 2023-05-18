//depois a pagina foi carregada é usada a function

window.onload = function(){
    var url = "https://openweathermap.org/price";
    var minhaAPI = "0de8d84dca8a05a327e47a1055365ddb";
    var resultado;
    var cidade;

    cidades.onchange = function(){
        //Criando objeto ajax dependendo do navegador
        var ajax = null;
        //Se no navegador exisir o XMLHttpRequest(), ele cria por essa metodologia
        if(window.XMLHttpRequest){
            ajax = new XMLHttpRequest();
        //Se no navegador não existir ele usa ActivXObject
        }else if(window.ActiveXObject){
            ajax = new ActiveXObject("Msxml2.XMLHTTP");
        }
        cidade = cidade.value
        if(cidade !=0){
            //abre página via GET
            ajax.open("GET",url + 'appid=' + minhaAPI + '&q='+ cidade + '&units=metric&lang=pt',true);
            //ajax.send(null)
            ajax.onreadystatechange = function(){
                if(ajax.readyState == 4){
                    if(ajax.status == 200){
                        //console.log(ajax.responseText);
                        resultado = JSON.parse(ajax.responseText);
                        console.log(resultado);
                        console.log(resultado.name);
                        console.log(resultado.main.temp_min);
                        console.log(resultado.main.temp_max);
                        console.log(resultado.weather[0].description);
                    }
                }
            }
        }
    }
}