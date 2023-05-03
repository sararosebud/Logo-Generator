class Shape {
    constructor() {
       this.color = '' 
       this.text = ''
       this.textColor = ''

    }
    setColor(color) {
        this.color = color
    }
    
    setText(text, textColor) {
        this.text = text
        this.textColor = textColor
            }
}

class Circle extends Shape {
    render() {
        return  `<svg xmlns="http://www.w3.org/2000/svg" 
        width="200" height="300">
          <g>
            <circle cx="100" cy="100" r="90" fill ="${this.color}">
            </circle>
            <text x="50%" y="35%" text-anchor="middle" font-size="60" fill="${this.textColor}" dy=".3em">${this.text}</text>
          </g>
        </svg>`

    }
}

class Triangle extends Shape {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" 
        width="300" height="200">
          <g>
          <polygon points="150, 18 244, 182 56, 182" fill="${this.color}">
          </polygon>
          <text x="150" y="125" text-anchor="middle" font-size="56" fill="${this.textColor}" dy=".3em">${this.text}</text>
          </g>
          </svg>`

    }
}

class Square extends Shape {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" 
        width="300" height="200">
        <g transform="translate(50,10)">
        <rect width="200" height="200" fill="${this.color}"></rect>
        <text x="100" y="100" alignment-baseline="middle" font-size="55" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
      </g>    
        </svg>`

    }
}

module.exports = {Circle, Triangle, Square}