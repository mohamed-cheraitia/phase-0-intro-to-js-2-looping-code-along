// Code your solutions in this file
let msg = [];
const names = ["sami", "karim", "Mohamed"];
const event = "birthday";

function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    msg.push(message);
  }
  return msg;
}

function countDown (i){

while (i >= 0) {
  console.log(i);
   i--;
}
}

countDown(10);