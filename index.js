
function Additem(){

const container=document.getElementById("shopping-list")
const input=document.getElementById("list-item")
const item=input.value.trim() 
if(item=="") return
console.log(item)


const ListItems=document.createElement("li")
ListItems.textContent=item
console.log(item)

const deletebutton=document.createElement("button")
deletebutton.className="delete"
console.log(deletebutton.className)

deletebutton.textContent="delete"

deletebutton.onclick=function(){
ListItems.remove()
}

ListItems.appendChild(deletebutton)
container.appendChild(ListItems)
input.value=""




}


