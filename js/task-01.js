const numCateg = document.querySelectorAll('.item');
console.log(`Number of categories: ${numCateg.length}`);

numCateg.forEach(function (element){
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
})