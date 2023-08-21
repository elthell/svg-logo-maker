const { generateSvg } = require("./svg");

// test svg generator function
describe("SVG test", () => {
    test("test for a logo.svg with black text saying 'CAT' on a gray circle", () => {
        // example data
        let data = {
            text: "CAT",
            textColor: "black",
            shape: "Circle",
            shapeColor: "gray"
        }
      expect(generateSvg(data)).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="115" r="80" fill="gray" />
        <text x="150" y="130" text-anchor="middle" font-size="40" fill="black">CAT</text>
    </svg>`
      );
    });
  });
