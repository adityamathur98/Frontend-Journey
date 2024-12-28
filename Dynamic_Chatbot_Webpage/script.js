let chatbotMsgList = [
  "Hi",
  "Hey",
  "Good Morning",
  "Good Evening",
  "How can I help you?",
  "Thank You",
];

let chatContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");
let sendMsgBtnEl = document.getElementById("sendMsgBtn");

function createAndAppendReply() {
  let userMsgContainerEl = document.createElement("div");
  userMsgContainerEl.classList.add(
    "msg-to-chatbot-container",
    "d-flex",
    "justify-content-end"
  );
  chatContainerEl.appendChild(userMsgContainerEl);

  let userMsg = document.createElement("span");
  userMsg.textContent = userInputEl.value;
  userMsg.classList.add("msg-to-chatbot");
  userMsgContainerEl.appendChild(userMsg);

  userInputEl.value = "";

  let chatbotReplyContainer = document.createElement("div");
  chatbotReplyContainer.classList.add("msg-from-chatbot-container", "d-flex");
  chatContainerEl.appendChild(chatbotReplyContainer);

  let chatbotMsg = document.createElement("span");
  chatbotMsg.textContent =
    chatbotMsgList[Math.floor(Math.random() * chatbotMsgList.length)];
  chatbotMsg.classList.add("msg-from-chatbot");
  chatbotReplyContainer.appendChild(chatbotMsg);
}

sendMsgBtnEl.onclick = function () {
  createAndAppendReply();
};
