
function comfort(){
    var btn= document.getElementsByClassName('button');
    for(var i in btn){
        if( i==9){
            btn[i].innerText=0;
            break;
        }
        btn[i].innerText=Number(i)+1;
        
    }
}
function oda (ele){
    var p=document.getElementById('input');
    p.innerText+=ele.innerText;
}
function result (){
    var cout=document.getElementById('output');
    opt2=Number(document.getElementById('input').innerText);
    cout.innerText=calculator();
}
function clr(){
    document.getElementById('input').innerText = "";
    document.getElementById('output').innerText ="";
}
var opt1,opt2;
opt1=opt2=0;
var opt;
function operation(ele){
   opt1= Number(document.getElementById('input').innerText);
   opt=ele.innerText;
   clr();
}
function calculator(){
    switch(opt){
        case '+':
            return opt1+opt2;
         case '-':
            return opt1-opt2;
        case '*':
            return opt1*opt2;
        case '/':
           return opt1/opt2;
        default:
            return0;
    }
}