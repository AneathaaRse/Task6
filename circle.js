class Circle {
    // Properties
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    // Methods
    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return `Circle: radius=${this.radius}, color=${this.color}`;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

// Example usage
const circle1 = new Circle(); // Default values
console.log(circle1.toString()); // Circle: radius=1, color=red

const circle2 = new Circle(5.0); // Specified radius
console.log(circle2.toString()); // Circle: radius=5, color=red

const circle3 = new Circle(3.0, "blue"); // Specified radius and color
console.log(circle3.toString()); // Circle: radius=3, color=blue
