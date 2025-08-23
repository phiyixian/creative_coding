const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2080, 2080 ]

  // dimensions: 'A4',
  // pixelsPerInch: 300,
  // orientation: 'landscape',

};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    context.lineWidth = 0.01 * width;

    const w = width * 0.08;
    const h = height * 0.08;
    const gap = width * 0.018;
    const ix = width * 0.09;
    const iy = height * 0.09;

    const off = width * 0.01;

    let x, y;
    for (let i = 0; i < 7; i ++){
        for (let j = 0; j < 7; j++){
          context.strokeStyle = `hsl(${(i + (j + Math.random()) * 20) * 5 + j * 5}, ${70 * (j + 20) * (Math.random() * 10)}%, ${70 * (j + Math.random()) * 0.2}%)`;
            x = ix + (w + gap) * i;
            y = iy + (w + gap) * j;
            context.beginPath();
            context.rect(x, y, w, h);
            context.stroke();
            if (Math.random() > 0.5) {
                context.beginPath();
                context.rect(x + off / 2, y + off / 2, w - off * 2.5, h - off * 2.5);
                context.stroke();
            }
            if (Math.random() < 0.3) {
                context.beginPath();
                context.arc(x + (off * 4), y + (off * 4), (w - off)/4, 0, Math.PI * 2);
                context.stroke();
            }
            
        }  
    }
  };
};

canvasSketch(sketch, settings);
