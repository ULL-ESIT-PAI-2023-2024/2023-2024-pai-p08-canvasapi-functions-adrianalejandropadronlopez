/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @author  Adrián Alejandro Padrón López
 * @Date 15/03/2024
 *
 * @description File used to create a grid on a canvas
 *
 */

/**
 * Function that creates a grid on a canvas
 */
function CreateGrid() {
  const canvas = <HTMLCanvasElement>document.getElementById('grid');
  const canvasContext = canvas.getContext('2d');
  if (canvasContext) {
    DrawVerticalLines(canvas, canvasContext);
    DrawHorizontalLines(canvas, canvasContext);
    DrawHorizontalNumbers(canvas, canvasContext);
    DrawVerticalNumbers(canvas, canvasContext);
  }
}

// lineal, exponencial, raiz cuadrada, logaritmo

/**
 * Function that draws horizontal lines on a canvas
 * @param canvas The canvas to draw the lines on
 * @param canvasContext The context of the canvas
 */
function DrawHorizontalLines(canvas: HTMLCanvasElement, canvasContext: CanvasRenderingContext2D) {
  for (let i = 0; i < canvas.width; i += 50) {
    canvasContext.beginPath();
    canvasContext.moveTo(0, i);
    canvasContext.lineTo(canvas.width, i);
    if (i === canvas.height / 2) {
      canvasContext.strokeStyle = '#555';
    } else {
      canvasContext.strokeStyle = '#ddd';
    }
    canvasContext.stroke();
  }
}

/**
 * Function that draws vertical lines on a canvas
 * @param canvas The canvas to draw the lines on
 * @param canvasContext The context of the canvas
 */
function DrawVerticalLines(canvas: HTMLCanvasElement, canvasContext: CanvasRenderingContext2D) {
  for (let i = 0; i < canvas.width; i += 50) {
    canvasContext.beginPath();
    canvasContext.moveTo(i, 0);
    canvasContext.lineTo(i, canvas.height);
    if (i === canvas.width / 2) {
      canvasContext.strokeStyle = '#555';
    } else {
      canvasContext.strokeStyle = '#ddd'; 
    }
    canvasContext.stroke();
  }
}

/**
 * Function that draws the numbers on the horizontal axis
 * @param canvas The canvas to draw the numbers on
 * @param canvasContext The context of the canvas
 */
function DrawHorizontalNumbers(canvas: HTMLCanvasElement, canvasContext: CanvasRenderingContext2D) {
  const midPoint = canvas.width / 2;
  for (let i = 0; i < canvas.width; i += 50) {
    if (i !== midPoint) {
      let numberToDraw = Math.floor((i - midPoint) / 50);
      canvasContext.fillText(numberToDraw.toString(), i, (canvas.height / 2) + 10);
    }
  }
}

/**
 * Function that draws the numbers on the vertical axis
 * @param canvas The canvas to draw the numbers on
 * @param canvasContext The context of the canvas
 */
function DrawVerticalNumbers(canvas: HTMLCanvasElement, canvasContext: CanvasRenderingContext2D) {
  const midPoint = canvas.height / 2;
  for (let i = -1; i < canvas.height; i += 50) {
    let numberToDraw = Math.floor((midPoint - i) / 50);
    if (numberToDraw < 0) {
      canvasContext.fillText(numberToDraw.toString(), (canvas.width / 2) - 13, i);
    } else {
      canvasContext.fillText(numberToDraw.toString(), (canvas.width / 2) - 10, i);
    }
  }
}

CreateGrid();