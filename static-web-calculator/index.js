function bclick(a) 
{
    document.getElementById("input").value+=a;
}
function bclear(){
    var b=document.getElementById("input").value;
    b=b.slice(0,-1)
    document.getElementById("input").value=b
}
function eclick(){
    var c=document.getElementById("input").value;
    var r=eval(c)
    document.getElementById("input").value=r
}