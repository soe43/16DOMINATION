var button=document.getElementById("b");
button.addEventListener("click",addToList);

var addToList=function(e){
    var list=document.getElementById("thelist");
    var item=document.createElement("LI");
    var text=document.createTextNode("new item");
    item.appendChild(text);
    list.appendChild(item);
};
