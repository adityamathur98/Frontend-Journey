let greeting =
  '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let parsedGreetObj = JSON.parse(greeting);
console.log(parsedGreetObj);

let fromTextEl = document.getElementById("fromText");
fromTextEl.textContent = "From:" + parsedGreetObj.from;

let toTextEl = document.getElementById("toText");
toTextEl.textContent = "To:" + parsedGreetObj.to;

let greetMsgEl = document.getElementById("greetMsg");
greetMsgEl.textContent = parsedGreetObj.greetText;
