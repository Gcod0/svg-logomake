const { Circle, Sqaure, Triangle} = require ('./shapes.')

// circle shape
describe('Circle', () => {
    test ('renders correctly', () => {
        const shape = new Circle();
        var color = 'red';
        shape.setColor(color);
        expect(shape.render()).toBe(`<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${color}" />`);
    });
});

// square shape
describe('Square', () => {
    test ('renders correctly', () => {
        const shape = new Square();
        var color = 'blue';
        shape.setColor(color);
        expect(shape.render()).toBe(`<rect width="80" height="80" stroke="black" stroke-width="3" fill="${color}" />`);
    });
}
);

// triangle shape
describe('Triangle', () => {
    test ('renders correctly', () => {
        const shape = new Triangle();
        var color = 'green';
        shape.setColor(color);
        expect(shape.render()).toBe(`<polygon points="50,0 100,100 0,100" stroke="black" stroke-width="3" fill="${color}" />`);
    }
    );
}
);


