var katzDeli = [];
var counter = 0;

function takeANumber(katzDeliLine) {
  counter++;
  katzDeliLine.push(counter)
  return `You are number ${counter}.`;
}

console.log(takeANumber(katzDeli)) //=> You are number 1
console.log(takeANumber(katzDeli)) //=> You are number 2
console.log(takeANumber(katzDeli)) //=> You are number 3

console.log(nowServing(katzDeli))
console.log(nowServing(katzDeli))
console.log(nowServing(katzDeli))

console.log(takeANumber(katzDeli)) //=> You are number 4

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var serving = katzDeliLine.shift();  
    return `Currently serving ${serving}.`;
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    const newArr = [];
    let resultMessage = "The line is currently: ";
    for(let i = 0; i < katzDeliLine.length; i++) {
      newArr.push(`${i+1}. ${katzDeliLine[i]}`)
    }
    resultMessage += newArr.join(", ");
    return resultMessage;
  }
}