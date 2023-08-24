// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);


function writeCards(arrayOfStringNames, eventName) {
  const messages = []
  for (let i = 0; i < arrayOfStringNames.length; i++) {
    messages.push(`Thank you, ${arrayOfStringNames[i]}, for the wonderful ${eventName} gift!`)
  }
  return (messages)
}

writeCards(["Sam", "Luis", "Ted"], "Graduation")


function countDown() {
  let countDown = 10;
  while (countDown > -1) {
    console.log(countDown--);
  }
}