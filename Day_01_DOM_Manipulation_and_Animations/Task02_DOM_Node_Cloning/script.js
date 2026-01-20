/**
 * Given a web document as shown below in Fig. a, with only these few lines of code in shown in Fig.b.
 * Using DOM Nodes to access, create, modify or remove any of its elements to have it finally as shown in Fig. c.
 */

let header = document.getElementById("header");

setTimeout(function () {
  document.images[0].src = "SpiderUp.png";
}, 1990);

setTimeout(function () {
  header.style.textAlign = "right";
  let footer = header.cloneNode(true);
  footer.id = "footer";
  footer.style.textAlign = "left";
  footer.style.position = "fixed";
  footer.style.left = 10;
  footer.style.bottom = 0;
  document.body.append(footer);
  document.images[1].src = "SpiderDown.png";
  let navElement = document.getElementById("nav");
  navElement.style.listStyleType = "upper-roman";
}, 2000);
