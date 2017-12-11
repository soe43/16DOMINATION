var button=document.getElementById("b");
var listTag=document.getElementsByTagName("LI");
var heading=document.getElementById("h");
var button2=document.getElementById("b2");

var fibonacci=function(n){
    if(n<=2){
	return 1;
    }
    else{
	return fibonacci(n-1)+fibonacci(n-2);
    }
}

var i=8;
//adds an element to the list when button is clicked
var addToList=function(e){
    var list=document.getElementById("thelist");
    var item=document.createElement("LI")
    item.innerHTML="item "+i;
    list.appendChild(item);
    i++;
    addListeners(item); //add event listeners to newly created list element
};

//changes the heading at the top to contain the text of the item when mouse goes over the item
var changeHeading=function(e){
    heading.innerHTML=this.innerHTML;
};

//heading goes back to "Hello World" when the mouse is no longer over an item in the list
var revert=function(e){
    heading.innerHTML="Hello World!";
};

//removes an item on the list if clicked
var removeListItem=function(e){
    i--;
    this.remove();
};

var c=1;
//add fib num to list
var addFibToList=function(e){
    var list=document.getElementById("secondList");
    var item=document.createElement("LI");
    item.innerHTML=fibonacci(c);
    c++;
    list.appendChild(item);
};

button2.addEventListener("click", addFibToList);

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
