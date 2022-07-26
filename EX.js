var dv= document.getElementsByClassName('dev2');
for( var i in dv){
    if(i==9){
        dv[i].innerText=0;
        break;
    }
    dv[i].innerText=Number(i)+1;
}
function pr(ele){
   var p=document.getElementById('para');
   p.innerText+=ele.innerText;
}

