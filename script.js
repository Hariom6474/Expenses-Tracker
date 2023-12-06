function addExpense(e) {
  e.preventDefault();
  const Expenseamount = e.target.Expenseamount.value;
  const description = e.target.description.value;
  const category = e.target.category.value;
  let myObj = {
    Expenseamount: Expenseamount,
    description: description,
    category: category,
  };
  let elem = JSON.stringify(myObj);
  saveToLocalStorage(description, elem);
  createListItem(Expenseamount, description, category);
  clearFormInput();
}
function saveToLocalStorage(description, elem) {
  localStorage.setItem(description, elem);
}
function createListItem(Expenseamount, description, category) {
  let ulist = document.querySelector(".list-group");
  let li = document.createElement("li");
  li.className = "list-group-item mt-3";
  let delbtn = document.createElement("input");
  delbtn.className = "btn btn-outline-danger btn-sm";
  delbtn.type = "button";
  delbtn.value = "Delete";
  let editbtn = document.createElement("input");
  editbtn.className = "btn btn-outline-secondary btn-sm";
  editbtn.type = "button";
  editbtn.value = "Edit";
  li.appendChild(
    document.createTextNode(`${Expenseamount} - ${description} - ${category} `)
  );
  li.appendChild(delbtn);
  li.appendChild(editbtn);
  ulist.appendChild(li);
  delbtn.onclick = () => {
    localStorage.removeItem(description);
    ulist.removeChild(li);
  };
  editbtn.onclick = () => {
    document.getElementById("Expenseamount").value = Expenseamount;
    document.getElementById("description").value = description;
    document.getElementById("category").value = category;
    localStorage.removeItem(description);
    ulist.removeChild(li);
  };
}
function clearFormInput() {
  document.getElementById("Expenseamount").value = "";
  document.getElementById("description").value = "";
  document.getElementById("category").value = "";
}
