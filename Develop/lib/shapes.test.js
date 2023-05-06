const { Shape } = require('./shapes');

describe('Shape', () => {
  test('setColor sets the color of the shape', () => {
    const shape = new Shape();
    shape.setColor('red');
    expect(shape.color).toBe('red');
  });

  test('setText sets the text and text color of the shape', () => {
    const shape = new Shape();
    shape.setText('ABC', 'blue');
    expect(shape.text).toBe('ABC');
    expect(shape.textColor).toBe('blue');
  });
});
