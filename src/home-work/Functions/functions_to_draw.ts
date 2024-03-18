/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @author  Adrián Alejandro Padrón López
 * @Date 15/03/2024
 *
 * @description File were all the functions to draw are stored
 *
 */

/**
 * Function that draws the any function on a canvas
 */
function drawFunction() {
  const canvas = <HTMLCanvasElement>document.getElementById('grid');
  const canvasContext = canvas.getContext('2d');
  if (canvasContext) {
    drawCosineFunction(canvas, canvasContext);
  }
}

/**
 * Function that draws the sine function on a canvas
 * @param canvas The canvas to draw the function on
 * @param canvasContext The context of the canvas
 */
function drawSineFunction(canvas: HTMLCanvasElement, canvasContext: CanvasRenderingContext2D) {
  const midPoint = canvas.width / 2;
  for (let i = 0; i < canvas.width; i++) {
    const x = i - midPoint;
    canvasContext.beginPath();
    canvasContext.moveTo(i, canvas.height / 2 - Math.sin(x / 50) * 50);
    canvasContext.lineTo(i + 1, canvas.height / 2 - Math.sin((x + 1) / 50) * 50);
    canvasContext.strokeStyle = 'red';
    canvasContext.stroke();
  }
}

/**
 * Function that draws the cosine function on a canvas
 * @param canvas The canvas to draw the function on
 * @param canvasContext The context of the canvas
 */
function drawCosineFunction(canvas: HTMLCanvasElement, canvasContext: CanvasRenderingContext2D) {
  const midPoint = canvas.width / 2;
  for (let i = 0; i < canvas.width; i++) {
    const x = i - midPoint;
    canvasContext.beginPath();
    canvasContext.moveTo(i, canvas.height / 2 - Math.cos(x / 50) * 50);
    canvasContext.lineTo(i + 1, canvas.height / 2 - Math.cos((x + 1) / 50) * 50);
    canvasContext.strokeStyle = 'blue';
    canvasContext.stroke();
  }
}

function drawExponentialFunction(canvas: HTMLCanvasElement, canvasContext: CanvasRenderingContext2D) {
  const midPoint = canvas.width / 2;
  for (let i = 0; i < canvas.width; i++) {
    const x = i - midPoint;
    canvasContext.beginPath();
    canvasContext.moveTo(i, canvas.height / 2 - Math.exp(x / 50) * 50);
    canvasContext.lineTo(i + 1, canvas.height / 2 - Math.exp((x + 1) / 50) * 50);
    canvasContext.strokeStyle = 'green';
    canvasContext.stroke(); 
  }
}

function drawSquareRootFunction(canvas: HTMLCanvasElement, canvasContext: CanvasRenderingContext2D) {
  const midPoint = canvas.width / 2;
  for (let i = 0; i < canvas.width; i++) {
    const x = i - midPoint;
    if (x >= 0) {
      canvasContext.beginPath();
      canvasContext.moveTo(i, canvas.height / 2 - Math.sqrt(x / 50) * 50);
      canvasContext.lineTo(i + 1, canvas.height / 2 - Math.sqrt((x + 1) / 50) * 50);
      canvasContext.strokeStyle = 'orange';
      canvasContext.stroke();
    }
  }
}

function drawLogarithmicFunction(canvas: HTMLCanvasElement, canvasContext: CanvasRenderingContext2D) {
  const midPoint = canvas.width / 2;
  for (let i = 0; i < canvas.width; i++) {
    const x = i - midPoint;
    if (x > 0) {
      canvasContext.beginPath();
      canvasContext.moveTo(i, canvas.height / 2 - Math.log(x / 50) * 50);
      canvasContext.lineTo(i + 1, canvas.height / 2 - Math.log((x + 1) / 50) * 50);
      canvasContext.strokeStyle = 'purple';
      canvasContext.stroke();
    }
  }
}

function drawTangentFunction(canvas: HTMLCanvasElement, canvasContext: CanvasRenderingContext2D) {
  for (let i = 0; i < canvas.width; i++) {
    canvasContext.beginPath();
    canvasContext.moveTo(i, canvas.height / 2 - Math.tan(i / 50) * 50);
    canvasContext.lineTo(i + 1, canvas.height / 2 - Math.tan((i + 1) / 50) * 50);
    canvasContext.strokeStyle = 'black';
    canvasContext.stroke();
  }
}

function drawLinealFunction(canvas: HTMLCanvasElement, canvasContext: CanvasRenderingContext2D, point: number) { 
  const y = canvas.height / 2 - point * 50;
  canvasContext.beginPath();
  canvasContext.moveTo(0, y);
  canvasContext.lineTo(canvas.width, y);
  canvasContext.strokeStyle = 'pink';
  canvasContext.stroke();
}

drawFunction();