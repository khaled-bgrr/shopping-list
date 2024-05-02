//Add items to the list via form
const itemList = document.querySelector("#item-list");
const input = document.querySelector(".form-input");
const formBtn = document.querySelector(".btn");
const clearBtn = document.querySelector("#clear");
const filter = document.querySelector(".filter");
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
    li.classList = "remove";
    li.innerText = input.value;
    console.log(li);
    const btn = document.createElement("button");
    const icon = document.createElement("i");

    btn.classList.add("remove-item", "btn-link", "text-red");
    icon.classList.add("fa-solid", "fa-xmark");
    btn.appendChild(icon);
    li.appendChild(btn);
    itemList.appendChild(li);
    input.value = "";
    checkUI();
  }
};

formBtn.addEventListener("click", addItem);

//Removing items by clicking X

const removeItem = (e) => {
  if (e.target.parentElement.classList.contains("remove-item")) {
    if (confirm("Are you sure ?")) {
      e.target.parentElement.parentElement.remove();
    }
    checkUI();
  } else {
    console.log("not the X mark");
  }
};

const clearAll = () => {
  while (itemList.firstChild) {
    itemList.firstChild.remove();
  }
  checkUI();
};
//Clean UI, removing the filter field and the clear btn when there is no items
const checkUI = () => {
  const items = itemList.querySelectorAll("li");
  if (items.length === 0) {
    filter.style.display = "none";
    clearBtn.style.display = "none";
  } else {
    filter.style.display = "block";
    clearBtn.style.display = "block";
  }
};
console.log(itemList);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearAll);
checkUI();
