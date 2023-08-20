// import shapes
const { Circle, Square, Triangle } = require("./shapes");

function renderShape(shape, color) {
    let newShape;

    if (shape === "Circle") {
        newShape = new Circle();
        newShape.setColor(color);

    } if (shape === "Square") {
        newShape = new Square();
        newShape.setColor(color);

    } if (shape === "Triangle") {
        newShape = new Triangle();
        newShape.setColor(color);
    }

    console.log(newShape);
    let newShapePlus = newShape.render();
    console.log(newShapePlus);

    return newShapePlus;
}

function generateSvg(data) {
  let shape = data.shape;
  let shapeColor = data.shapeColor;

  let newSvg = 
  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${renderShape(shape, shapeColor)}
        <text x="150" y="130" text-anchor="middle" font-size="40" fill="${
          data.textColor
        }">${data.text}</text>
    </svg>`;

    return newSvg;
}

module.exports = { generateSvg };
