const arr = [
  {
    text: "раз",
    done: false,
  },

  {
    text: "два",
    done: true,
  },

  {
    text: "три",
    done: false,
  },

  {
    text: "четыре",
    done: false,
  },

  {
    text: "пять",
    done: false,
  },
];

const form = document.querySelector("#form");
const inp = document.querySelector("#list__inp");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inp.value) {
    addToDo(inp.value);
    inp.value = "";
  }
});

const ul = document.createElement("ul");
ul.classList = "ul";

const body = document.querySelector("body");

let render = (arr) => {
  ul.innerHTML = "";

  const list = document.querySelector("#list");
  for (let i in arr) {
    const obj = arr[i];
    console.log(i);

    const li = document.createElement("li");
    li.classList.add("li");
    li.textContent = obj.text;
    li.style.listStyleType = "none";
    ul.append(li);
    list.append(ul);

    //Кнопка удаления
    const rem = document.createElement("button");
    rem.classList.add("rem");
    rem.textContent = "x";
    li.append(rem);

    //Чекбокс
    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = arr[i].done;
    li.prepend(check);

    //Кнопка и функция удаления
    rem.addEventListener("click", (e) => {
      remove(i);
    });

    if (arr[i].done) {
      li.style.textDecoration = "line-through";
    }
    //Событие для checkbox
    check.addEventListener("click", (e) => {
      checkbox(i);
    });
  }
};

//Функция удаления
let remove = (index) => {
  arr.splice(index, 1);
  render(arr);
};
render(arr);
remove(arr, 0);

//Функция добавления задачи
let addToDo = (text) => {
  const obj = {
    text: text,
    done: false,
  };
  arr.push(obj);
  render(arr);
};

//Фйункция check
let checkbox = (index) => {
  arr[index].done = !arr[index].done;
  render(arr);
};
