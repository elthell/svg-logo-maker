// shape class
class Shape {
    constructor() {
      this.color = "";
    }
    // function to set color
    setColor(userColor) {
      this.color = userColor;
    }
  }

  // circle class with dimensions
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }
  
  // square class with dimensions
  class Square extends Shape {
    render() {
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }

  // triangle class with dimensions
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  // export shape clases
  module.exports = { Circle, Square, Triangle };