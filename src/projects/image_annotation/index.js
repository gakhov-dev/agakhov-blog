document.addEventListener("dragover", (evt) => evt.preventDefault());
document.addEventListener("dragleave", (evt) => evt.preventDefault());
document.addEventListener("drop", (evt) => evt.preventDefault());

const imageboard = document.querySelector(".imageboard");

const imgDOM = document.querySelector("img");
const pixiCanvas = document.querySelector(".pixi_canvas");

const drawBtn = document.querySelector(".anotaion-btn");
const textArea = document.querySelector(".anotation-text");

// const rect_template = document.querySelector(".rect");
let img_width = 800;
let img_height = 800;

let naturalHeight;
let naturalWidth;

const PIXI_CANVAS_WIDTH = 800;
const PIXI_CANVAS_HEIGHT = 800;

let app = new PIXI.Application({
  width: PIXI_CANVAS_WIDTH,
  height: PIXI_CANVAS_HEIGHT,
});

pixiCanvas.appendChild(app.view);

const graphics = new PIXI.Graphics();
// graphics.beginFill(0xde3249);
// graphics.drawRect(50, 50, 100, 100);
// graphics.endFill();
// app.stage.addChild(graphics);

drawBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //clearStage();

  let lines = textArea.value.split(/\r?\n/);
  for (let line of lines) {
    let [id, x, y, w, h] = line.trim().split(" ");
    x = x * img_width;
    w = w * img_width;
    y = y * img_height;
    h = h * img_height;
    //rect = rect_template.cloneNode();
    //let obj = new PIXI.Graphics();

    graphics.lineStyle(2, 0x663399, 1);
    //graphics.beginFill(0xffffffee);
    graphics.drawRect(x - w / 2, y - h / 2, w, h);
    graphics.endFill();

    // Add it to the stage to render

    // rect.style.left = `${x - w / 2}px`;
    // rect.style.top = `${y - h / 2}px`;

    // rect.style.width = `${w}px`;
    // rect.style.height = `${h}px`;
    // imageboard.appendChild(rect);
  }
  app.stage.addChild(graphics);
});

imageboard.addEventListener("drop", (evt) => {
  evt.preventDefault();
  //alert("Drop");
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

  var reader = new FileReader();
  //reader.readAsDataURL(fileUpload.files[0]);
  reader.onload = function (e) {
    //Initiate the JavaScript Image object.
    var image = new Image();

    //Set the Base64 string return from FileReader as source.
    image.src = e.target.result;

    //Validate the File Height and Width.
    image.onload = function () {
      naturalHeight = this.height;
      naturalWidth = this.width;
      //   if (height > 100 || width > 100) {
      //     alert("Height and Width must not exceed 100px.");
      //     return false;
      //   }
      //alert(`Uploaded image has ${naturalHeight} and W: ${naturalWidth}.`);

      addToCanvas(this);

      return true;
    };
  };
  reader.readAsDataURL(file);

  //addToCanvas(file)
};

function addToCanvas(image) {
  // PIXI.Texture.fromLoader
  //new BaseTexture(new PIXI.resources.ImageBitmapResource(image.BaseTexture)
  clearStage();
  let sprite = PIXI.Sprite.from(image);
  img_width = PIXI_CANVAS_WIDTH;
  img_height = img_height * (PIXI_CANVAS_WIDTH / img_width);
  sprite.width = img_width;
  sprite.height = img_height;

  app.stage.addChild(sprite);
}

function clearStage() {
  let stage = app.stage;
  for (var i = stage.children.length - 1; i >= 0; i--) {
    stage.removeChild(stage.children[i]);
  }
}

//   const reader = new FileReader();
//   reader.onload = (evt) => {
//     try {
//       imgDOM.src = evt.target.result;

//       img_width = imgDOM.naturalHeight;
//       img_height = imgDOM.naturalHeight;

//       alert(`img narrow size ${img_width} : ${img_height}`);
//       //imgDOM.width = "100%";
//       //   imgDOM.width = 400;
//     } catch (e) {
//       return alert(e);
//     }
//   };
//   reader.readAsDataURL(file);
// };
