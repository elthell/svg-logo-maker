const { Circle, Square, Triangle } = require("./shapes");

// test for circle with color keyword bg
describe("Circle test", () => {
    test("test for a circle with a green background", () => {
      const shape = new Circle();
      shape.setColor("green");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="115" r="80" fill="green" />'
      );
    });
  });


  // test for square with hexidecimal bg
  describe("Square test", () => {
    test("test for a square with a #d5b0ac background", () => {
      const shape = new Square();
      shape.setColor("#d5b0ac");
      expect(shape.render()).toEqual(
        '<rect x="73" y="40" width="160" height="160" fill="#d5b0ac" />'
      );
    });
  });


  // test for triangle
  describe("Triangle test", () => {
    test("test for a triangle with a cyan background", () => {
      const shape = new Triangle();
      shape.setColor("cyan");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="cyan" />'
      );
    });
  });