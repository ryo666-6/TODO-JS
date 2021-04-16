import "./styles.css";

const onClickAdd = () => {
  const inputText = document.querySelector(".add-text").value;
  document.querySelector(".add-text").value = "";
  // alert(inputText);
  createIncompleteList(inputText);
};

const deleteFromIncompleteList = (target) => {
  document.querySelector(".incomplete-list").removeChild(target);
};

const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerHTML = text;

  document.querySelector(".incomplete-list").appendChild(div);
  console.log(div);

  const completeButton = document.createElement("button");
  completeButton.innerHTML = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerHTML;

    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerHTML = text;

    const backButton = document.createElement("button");
    backButton.innerHTML = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.querySelector(".completed-list").removeChild(deleteTarget);

      const text2 = backButton.parentNode.firstElementChild.innerHTML;
      createIncompleteList(text2);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.querySelector(".completed-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};
document
  .querySelector(".add-button")
  .addEventListener("click", () => onClickAdd());
