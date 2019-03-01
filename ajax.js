function ajax(method, url ,data, flag,callback){
    var app = null;
    if(window.XMLHttpRequest){
        app = new XMLHttpRequest();
    
    }else{
        app = new ActiveXObject('Microsoft.XMLHTTP');
    }
    if(method == 'GET'){
        app.open('GET', url+ '?' + data, flag);
        app.send();
    }else if(method == 'POST'){
        app.open('POST', url , flag);
        app.setRequestHeader('Content-type','application-www-form-urlencode');
        app.send(data);
    }
    app.onreadystatechange = function (){
        if(app.readyState == 4){
            if(app.status == 200){
                callback(app.responseText);
            }
        }
    }
}