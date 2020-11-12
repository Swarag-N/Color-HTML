import html2canvas from 'html2canvas/dist/html2canvas.min.js';

/**
 * Initialize Download of Rendered HTML
 * @param {domElement} domEle DOM to Rendered
 */
function initializeDownload(domEle) {
  html2canvas(domEle).then((canvasElm) => {
    const downloadFormat = document.getElementById('downloadFormat').value;
    const imageType = 'image/' + downloadFormat;
    const link = document.getElementById('link');
    const fileName = `ColorHTML-${getDateFormatName()}.` + downloadFormat;
    link.setAttribute('download', fileName);
    link.setAttribute(
        'href',
        canvasElm.toDataURL(imageType).replace(imageType, 'image/octet-stream'),
    );
    link.click((evt) => {
      evt.preventDefault();
    });
  });
}


/**
 * Give a name for To Download Files
 * @return {string} YYYY-MM-DD-000000000000
 */
function getDateFormatName() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}-${d.getTime()}`;
}


/**
 * Used to Start on onClickEvent
 */
function downloadDom() {
  const iframeD = document.getElementById('outIframe');
  const iframeDocument = iframeD.contentWindow.document;
  const body = iframeDocument.getElementsByTagName('body')[0];

  initializeDownload(body);
}

window.downloadDom = downloadDom;
