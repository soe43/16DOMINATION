var button=document.getElementById("b");
var listTag=document.getElementsByTagName("LI");

//adds an element to the list when button is clicked
var addToList=function(e){
    var list=document.getElementById("thelist");
    var item=document.createElement("LI");
    item.innerHTML="item "+listTag.length;
    list.appendChild(item);
    addListeners(item); //add event listeners to newly created list element
};

//changes the heading at the top to contain the text of the item when mouse goes over the item
var changeHeading=function(e){
    var heading=document.getElementById("h");
    heading.innerHTML=this.innerHTML;
};

//heading goes back to "Hello World" when the mouse is no longer over an item in the list
var revert=function(e){
    var heading=document.getElementById("h");
    heading.innerHTML="Hello World!";
};

//removes an item on the list if clicked
var removeListItem=function(e){
    this.remove()
};

//add event listener to button
button.addEventListener("click",addToList);

//this function adds event listeners to items
var addListeners=function(element){
    element.addEventListener("mouseover", changeHeading);
    element.addEventListener("mouseout", revert);
    element.addEventListener("click", removeListItem);
};

//add event listeners to list items
var listList = document.getElementsByTagName("LI");
for (i=0;i<listList.length;i++){
    addListeners(listList[i]);
};
