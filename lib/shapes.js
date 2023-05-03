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
        viewBox="0 0 500 500">
          <g>
            <circle cx="250" cy="250" r="245" fill ="${this.color}">
            </circle>
            <text x="50%" y="50%" text-anchor="middle" font-size="200" stroke="${this.textColor}" stroke-width="2px" dy=".3em">${this.text}</text>
          </g>
        </svg>`

    }
}

class Triangle extends Shape {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 500 500">
          <g>
          <polygon points="150, 18 244, 182 56, 182" fill="${this.color}">
          </polygon>
          <text x="150" y="125" text-anchor="middle" font-size="56" stroke="${this.textColor}" stroke-width="2px" dy=".3em">${this.text}</text>
          </g>
          </svg>`

    }
}

class Square extends Shape {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 500 500">
          <g>
        <rect x="40" y="10" width="400" height="400" fill="${this.color}"></rect>
        <text x="50%" y="50%" text-anchor="middle" font-size="200" fill="${this.textColor}">${this.text}</text>
          </g>     
        </svg>`

    }
}

module.exports = {Circle, Triangle, Square}