const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const items = [];

function createElem(arr){
  arr
    .map((item) => {
      const listLi = document.createElement("li");
      listLi.classList.add("item");
      listLi.textContent = item;
      items.push(listLi)
    })
    .join("");

    list.append(...items)
}

createElem(ingredients);