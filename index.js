// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

console.log(cats);
       
function destructivelyAppendCat(name) {
    cats.push(name);
}
//ralph^^

function destructivelyPrependCat(name){
    cats.unshift(name);
}//bob^^

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    return [...cats, name];
}

function prependCat(name) {
    return [name,...cats]
}

function removeLastCat() {
    return cats.slice(0,2)
}

function removeFirstCat() {
    return cats.slice(1)
}