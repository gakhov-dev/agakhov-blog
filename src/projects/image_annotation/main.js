document.addEventListener("dragover", (evt) => evt.preventDefault());
document.addEventListener("dragleave", (evt) => evt.preventDefault());
document.addEventListener("drop", (evt) => evt.preventDefault());

const DNDTarget = document.querySelector(".imageboard");
const imgDOM = document.querySelector("img");

const drawBtn = document.querySelector(".anotaion-btn");
const textArea = document.querySelector(".anotation-text");
const imageboard = document.querySelector(".imageboard");
const rect_template = document.querySelector(".rect");
let img_width = 1000;
let img_height = 563;

let naturalHeight;
let naturalWidth;

drawBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //let input = textArea.value.split(" ").map((element) => parseFloat(element));

  let lines = textArea.value.split(/\r?\n/);
  for (let line of lines) {
    let [id, x, y, w, h] = line.split(" ");
    x = x * img_width;
    w = w * img_width;
    y = y * img_height;
    h = h * img_height;
    rect = rect_template.cloneNode();

    rect.style.left = `${x - w / 2}px`;
    rect.style.top = `${y - h / 2}px`;

    rect.style.width = `${w}px`;
    rect.style.height = `${h}px`;
    imageboard.appendChild(rect);
  }
  //alert("x:" + x);
});

DNDTarget.addEventListener("drop", (evt) => {
  evt.preventDefault();
  const files = evt.dataTransfer.files;
  this.handleFiles(files);
});

handleFiles = (files) => {
  if (files.length !== 1) {
    return alert("Just give me one file please :)");
  }
  const file = files[0];
  if (file.type.split("/")[0] !== "image") {
    return alert("Only image files are supported :(");
  }

  const reader = new FileReader();
  reader.onload = (evt) => {
    try {
      imgDOM.src = evt.target.result;
      alert(`imgDOM.size ${imgDOM.width} : ${imgDOM.height}`);
      img_width = imgDOM.width;
      img_height = imgDOM.height;

      //imgDOM.width = "100%";
      //   imgDOM.width = 400;
    } catch (e) {
      return alert(e);
    }
  };
  reader.readAsDataURL(file);
};
