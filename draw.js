(function() {
    
    
})();

let downBtn = document.querySelector('.downLoad'),
  ColorBox = document.querySelector('#selectColor');

downBtn.onclick = function() {
  drawObject.exportCanvasAsPNG();
};

ColorBox.onchange = function(e) {
  drawObject.setBackground();
};

