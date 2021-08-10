let columnSpace = 50,
    columnWidth = 40,
    columnHeight= 150,
    columnX = 130; 

let getMaxElements = function (arr) {
  let maxTime = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (maxTime < arr[i]) {
      maxTime = arr[i];
    }
  }
  return maxTime;
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono ';
  ctx.fillText('Ебать! Да вы ж победили', 130, 40);

  for(let i = 0; i < times.length; i++) {
    if (times[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.font = '16px PT Mono ';
      ctx.fillText(Math.floor(times[i]), 130 + (columnSpace+columnWidth)*i, 240 - 150/getMaxElements(times)*times[i]);
    } else {
      ctx.fillStyle = '#000000';
      ctx.font = '16px PT Mono ';
      ctx.fillText(Math.floor(times[i]), 130 + (columnSpace+columnWidth)*i, 240 - 150/getMaxElements(times)*times[i]);
    }
  }

  for (let i = 0; i  < 4; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(columnX + (columnSpace+columnWidth)*i, 250, columnWidth, -150/getMaxElements(times)*times[i]);
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random() +')';
      ctx.fillRect(columnX + (columnSpace+columnWidth)*i, 250, columnWidth, -150/getMaxElements(times)*times[i]);
    }
  }

  for(let i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.font = '16px PT Mono ';
      ctx.fillText(names[i], 130 + (columnSpace+columnWidth)*i, 270);
    } else {
      ctx.fillStyle = '#000000';
      ctx.font = '16px PT Mono ';
      ctx.fillText(names[i], 130 + (columnSpace+columnWidth)*i, 270);
    }
  }
}