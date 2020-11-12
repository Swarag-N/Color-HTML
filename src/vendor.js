import html2canvas from 'html2canvas/dist/html2canvas.min.js';

// export class DownloadImage{

// eslint-disable-next-line valid-jsdoc
/**
 * @param {DOM Element} domEle Initialize Download
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

// eslint-disable-next-line valid-jsdoc
/**
 * @param
 */
function getDateFormatName() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}-${d.getTime()}`;
}


// eslint-disable-next-line require-jsdoc
function downloadDom() {
  const iframeD = document.getElementById('outIframe');
  const iframeDocument = iframeD.contentWindow.document;
  const body = iframeDocument.getElementsByTagName('body')[0];

  initializeDownload(body);
}

window.downloadDom = downloadDom;
