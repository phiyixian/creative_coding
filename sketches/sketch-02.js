const canvasSketch = require("canvas-sketch");
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [1080, 1080],
};

// const degToRad = (degree) => {
//   return (degree / 180) * Math.PI;
// };

// const randomRange = (min, max) => {
//   return Math.random() * (max - min) + min;
// };

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "black";

    // center x and y
    const cx = width * 0.5;
    const cy = height * 0.5;

    const w = width * 0.01; // 30 % of canvas
    const h = height * 0.1;
    let x, y;

    const num = 100;
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      context.strokeStyle = `hsl(${160 + 3*i}, 100%, 50%)`;
      const slice = math.degToRad(360/num);
      const angle = slice * i;

      x = radius * Math.sin(angle);
      y = radius * Math.cos(angle);

      // Drawing verticle rectangles
      context.save();
      context.fillStyle = 'black';
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(0.5, 4), random.range(1, 3));

      context.beginPath();
      context.rect(w, random.range(0, h * 5), w, h);
      context.fill();
      context.restore();

      // Drawing arc
      context.save();
      // context.translate(cx, cy);
      context.rotate(angle);

      context.lineWidth = random.range(15, 25);

      context.beginPath();
      context.arc(0, 0, random.range(0.5, 3), slice * random.range(0, -2), slice * random.range(5, 10));
      context.stroke()

      context.restore();

      // Drawing smaller arc
      context.save();
      // context.translate(cx, cy);
      context.rotate(angle);

      context.lineWidth = random.range(5, 20);

      context.beginPath();
      context.arc(0, 0, radius * random.range(2, 3.5), slice * random.range(0, -5), slice * random.range(1, 5));
      context.stroke()

      context.restore();
    }

    // Draw a circle
    // context.translate(600, 600);
    // context.beginPath();
    // context.arc(0, 0, 50, 0, Math.PI * 2);
    // context.fill();
  };
};

canvasSketch(sketch, settings);
