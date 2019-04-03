var app = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb });
app.view.id = 'canvas';


document.body.appendChild(app.view);
let drawObject = {
  canvasElementId: '#canvas',
  exportCanvasAsPNG: function() {
    var canvasElement = document.querySelector(this.canvasElementId);

    var MIME_TYPE = 'image/png';

    var imgURL = canvasElement.toDataURL(MIME_TYPE);

    var dlLink = document.createElement('a');
    dlLink.download = 'poster';
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(
      ':'
    );

    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
  },
  setBackground: function() {
    console.log(app.backgroundColor)
    app.backgroundColor = '#ff00ff'
    console.log(app.backgroundColor)
  }
};

