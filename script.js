//Add items to the list via form
const ul = document.querySelector("#item-list");
const input = document.querySelector(".form-input");
const formBtn = document.querySelector(".btn");

const addItem = (e) => {
  e.preventDefault();
  //Creating the elements for a new task
  //basic validation
  if (input.value == "") {
    alert("Please add an item");
    return;
  } else {
    console.log("success");
    const li = document.createElement("li");
    li.innerText = input.value;
    console.log(li);
    const btn = document.createElement("button");
    const icon = document.createElement("i");

    btn.classList.add("remove-item", "btn-link", "text-red");
    icon.classList.add("fa-solid", "fa-xmark");
    btn.appendChild(icon);
    li.appendChild(btn);
    ul.appendChild(li);
    input.value = "";
  }
};

formBtn.addEventListener("click", addItem);

//Removing items by clicking X

const removeItem = (e) => {
  e.target.parentElement.parentElement.remove();
};

const deleteBtns = document.querySelectorAll(".remove-item");
deleteBtns.forEach((Xbtn) => {
  Xbtn.addEventListener("click", removeItem);
});
