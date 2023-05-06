const { Circle, Triangle, Square } = require('./shapes');

describe('Shapes', () => {
  describe('Circle', () => {
    it('should render correctly', () => {
      const circle = new Circle();
      circle.setColor('#ff0000');
      circle.setText('ABC', '#ffffff');
      const svg = circle.render();
      expect(svg).toMatchSnapshot();
    });
  });

  describe('Triangle', () => {
    it('should render correctly', () => {
      const triangle = new Triangle();
      triangle.setColor('#00ff00');
      triangle.setText('XYZ', '#000000');
      const svg = triangle.render();
      expect(svg).toMatchSnapshot();
    });
  });

  describe('Square', () => {
    it('should render correctly', () => {
      const square = new Square();
      square.setColor('#0000ff');
      square.setText('123', '#ffffff');
      const svg = square.render();
      expect(svg).toMatchSnapshot();
    });
  });
});
