function Fbold() {

    if (document.getElementById("demo").style.fontWeight =="normal"){
         document.getElementById("demo").style.fontWeight = "bold";
    }
    else {
        document.getElementById("demo").style.fontWeight = "normal";
    }
}
function Fitalic() {

    if (document.getElementById("demo").style.fontStyle =="normal"){
         document.getElementById("demo").style.fontStyle = "italic";
    }
    else {
        document.getElementById("demo").style.fontStyle = "normal";
    }
}
function Funderline() {

    if (document.getElementById("demo").style.textDecoration =="none"){
         document.getElementById("demo").style.textDecoration= "underline";
    }
    else {
        document.getElementById("demo").style.textDecoration = "normal";
    }
}
function Flist(){
    document.getElementById("demo").style.fontSize=document.getElementById("size").value;
}
function Ftext(){
    document.getElementById("demo").style.fontFamily=document.getElementById("style").value;
}
