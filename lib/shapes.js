// we need a parent class for Shape that will render our svg depending on the shap chosen

class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    
}

class Circle extends Shape {
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text}">${this.textColor}</text></svg>`
    }
}

class Triangle extends Shape {
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,20 220,180 80,180" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text}">${this.textColor}</text></svg>`
    }
}

class Square extends Shape {    
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" rx="20" ry="20" width="200" height="160" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text}">${this.textColor}</text></svg>`
    }
}




module.exports = { Circle, Triangle, Square}