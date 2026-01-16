let list = [];

let question = Number(prompt("Kaç adet sayı girmek istiyorsunuz?"));

let number;

for (let i = 1; i <= question; i++) {

  number = Number(prompt(`${i}. sayıyı yazınız.`));

  if (number === 0) {
    continue;
  } else if (number < 0) {
    break;
  } else {
    list.push(number);
  }

}

console.log(list);

let total = 0;

for (let x = 0; x < list.length; x++) {

  total += list[x];

}
console.log(`Toplam: ${total}`);


let cift = [];
let tek = [];

for (let a = 0; a < list.length; a++) {

  if (list[a] % 2 === 0) {
    cift.push(list[a]);
  } else {
    tek.push(list[a]);
  }

}

console.log(`${cift.length} adet çift eleman var.`);
console.log(`${tek.length} adet tek eleman var.`);








