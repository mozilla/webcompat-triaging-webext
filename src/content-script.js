var port = browser.runtime.connect({ name: "port-from-cs" });

port.onMessage.addListener(function(m) {
  renderNotification(m.title, m.msg);
});

function renderNotification(notificationTitle, notificationMsg) {
  const container = document.createElement("div");
  const title = document.createElement("h1");
  const msg = document.createElement("p");
  const titleText = document.createTextNode(notificationTitle);
  const msgText = document.createTextNode(notificationMsg);

  title.appendChild(titleText);
  msg.appendChild(msgText);
  container.appendChild(title);
  container.appendChild(msg);

  const elem = document.querySelector("main");
  elem.insertAdjacentElement("afterbegin", container);
}

function init() {
  const details = {
    url: window.location.href
  };
  port.postMessage(details);
}

init();