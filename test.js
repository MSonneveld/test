function gc() {
  alert("hoi");
  alert(document.cookies);
}


function readcookies() {
  var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        alert(ca[i]);
    }
}

gc();
readcookies();
