let css = document.createElement("link");
css.rel = "stylesheet";
css.href = "https://CopyButtonjs.dragonhunter1.repl.co/copybutton.css";
document.head.appendChild(css);

function flexPos(node, conf) {
  switch (conf) {
    case "topright":
      break;
    case "topleft":
      node.style.flexDirection = "row";
      break;
    case "bottomright":
      node.style.alignItems = "flex-end";
      break;
    case "bottomleft":
      node.style.flexDirection = "row";
      node.style.alignItems = "flex-end";
      break;
    case "midright":
      node.style.alignItems = "stretch";
      break;
    case "midleft":
      node.style.flexDirection = "row";
      node.style.alignItems = "stretch";
      break;
    default:
      console.error("Invalid position");
  }
}

document.querySelectorAll("pre:has(code.docopy)").forEach((item) => {
  let d = document.createElement("div");
  var b = document.createElement("button");
  let code = item.querySelector("code");
  if ("copybuttonClass" in code.dataset) {
    b.classList.add(code.dataset.copybuttonClass);
  }
  if ("copybuttonHtml" in code.dataset) {
    b = eval(code.dataset.copybuttonHtml);
  } else if ("copybuttonIcon" in code.dataset) {
    b.innerHTML = `<i class="${code.dataset.copybuttonIcon}"></i>`;
  } else {
    b.innerHTML = `<i class="fa-solid fa-copy"></i>`;
  }
  b.classList.add("copybutton");
  if ("copybuttonPos" in code.dataset) {
    flexPos(d, code.dataset.copybuttonPos);
  }
  var tippyMessage = "Copied to clipboard!";
  if ("copybuttonMessage" in code.dataset) {
    tippyMessage = code.dataset.copybuttonMessage;
  }
  tippy(b, {
    trigger: "click",
    content: tippyMessage,
    duration: 500,
    onShow(instance) {
      // v5
      instance.setProps({ trigger: "mouseleave" });
    },
    onHide(instance) {
      // v5
      instance.setProps({ trigger: "click" });
    },
  });
  b.addEventListener("click", () => {
    let code = item.querySelector("code");
    navigator.clipboard.writeText(code.textContent);
  });
  d.classList.add("copyframe");
  // d.setAttribute("ontouchstart", "");
  d.style.minHeight = `${code.scrollHeight+5}px`;
  d.style.bottom = `${code.scrollHeight+5}px`;
  d.style.marginBottom = `-${code.scrollHeight+5}px`;
  // item.style.maxHeight = `${item.offsetHeight+4}px`;
  d.appendChild(b);

  item.appendChild(d);
  // console.log(d.scrollHeight)
});
