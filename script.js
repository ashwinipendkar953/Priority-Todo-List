const taskInput = document.querySelector("#taskInput");
const selectPriority = document.querySelector("#selectPriority");
const addBtn = document.querySelector("#addBtn");

const displayLowPriority = document.querySelector("#displayLowPriority");
const displayMediumPriority = document.querySelector("#displayMediumPriority");
const displayHighPriority = document.querySelector("#displayHighPriority");

addBtn.addEventListener("click", () => {
  const taskInputValue = taskInput.value;
  const selectedPriority = selectPriority.value;

  const listItem = document.createElement("li");
  listItem.className =
    "list-group-item d-flex justify-content-between align-items-center";
  listItem.innerHTML = `<span>${taskInputValue}</span> <button onClick="deleteHandler(this)" class="btn btn-danger">Delete</button>`;

  if (selectedPriority === "Low Priority") {
    displayLowPriority.appendChild(listItem);
  } else if (selectedPriority === "Medium Priority") {
    displayMediumPriority.appendChild(listItem);
  } else {
    displayHighPriority.appendChild(listItem);
  }

  taskInput.value = "";
  selectPriority.value = "Low Priority";
});

function deleteHandler(deleteBtn) {
  const listElement = deleteBtn.parentElement;
  listElement.remove();
}
