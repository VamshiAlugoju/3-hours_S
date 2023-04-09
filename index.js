
let ul_items = document.querySelector("#list-items")
let description = document.querySelector("#description")
let amount = document.querySelector("#expense_amount")
let options = document.querySelector("#options");

let submit_btn = document.querySelector("#submit-btn")
submit_btn.addEventListener("click" , addItems);

let deletebtn = document.querySelector("#deletebtn");
deletebtn.addEventListener("click" , delete_item)

let editbtn = document.querySelector("#editbtn");
editbtn.addEventListener("click" , edit_item)




 function addItems(e)
{  
    e.preventDefault();
    
  let newli =   document.createElement("li");
  let deletebtn = document.createElement("button");
  let editbtn = document.createElement("button");

  deletebtn.classList = "btn btn-danger btn-sm";
  editbtn.classList = "btn btn-primary btn-sm";
  newli.classList = " list-item list-group-item"

  deletebtn.id = "deletebtn"
  editbtn.id = "editbtn"
  deletebtn.addEventListener("click" , delete_item)
  editbtn.addEventListener("click" , edit_item)


  deletebtn.innerText = "delete"
  editbtn.innerText = "edit";
  newli.innerText =  amount.value + "-" + description.value+"-"+options.options[options.value].innerText
  
  newli.appendChild(deletebtn);
  newli.appendChild(editbtn)
  ul_items.appendChild(newli)
 
}


function delete_item(e)
{
    
    let li = e.target.parentElement;
    console.log(li)
    ul_items.removeChild(li)
}

function edit_item(e)
{   

    let li = e.target.parentElement;
    let words = li.innerText.split("-");
    amount.value = words[0];
    description.value = words[1];
    console.log(words)
    ul_items.removeChild(li)

}
