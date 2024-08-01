//prettier-ignore
initPDFViewer = () => {

  $("#pdfViewerDiv").html("");

  pdfjsLib.getDocument("https://k-fe-lpz.github.io/kfe/menu_3.pdf").promise.then((pdfDoc) => {
    let pages = pdfDoc._pdfInfo.numPages;

    for(let i = 1; i <= pages; i ++){
      pdfDoc.getPage(i).then((page) => {
      console.log(page);
      let pdfCanvas = document.createElement("canvas");
      let context = pdfCanvas.getContext("2d");
      let pageViewPort = page.getViewport({scale:2});
      console.log(pageViewPort);

      pdfCanvas.width = pageViewPort.width;
      pdfCanvas.height = pageViewPort.height;
      $("#pdfViewerDiv").append(pdfCanvas);

      page.render({
        canvasContext: context,
        viewport: pageViewPort,
      });

    })
    .catch((error) => console.log(error));
    }
    
  }).catch((error) => console.log(error));
};

$(function () {
  initPDFViewer();
});
