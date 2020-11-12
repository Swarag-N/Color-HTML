// import html2canvas from 'html2canvas/dist/html2canvas.min.js'

// export class DownloadImage{

//   downloadImg(domEle) {
//     html2canvas(domEle).then((canvasElm) => {
//       let downloadFormat = document.getElementById("downloadFormat").value;
//       let imageType = "image/" + downloadFormat;
//       let link = document.getElementById("link");
//       let fileName = `ColorHTML-${getDateFormatName()}.` + downloadFormat;
//       link.setAttribute("download", fileName);
//       link.setAttribute(
//         "href",
//         canvasElm.toDataURL(imageType).replace(imageType, "image/octet-stream")
//       );
//       link.click((evt) => {
//         evt.preventDefault();
//       });
//     });
//   }

//   getDateFormatName() {
//     let d = new Date();
//     return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}-${d.getTime()}`;
//   }
// }

function downloadImg(domEle) {
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

function getDateFormatName() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}-${d.getTime()}`;
}


module.exports={
  downloadImg,
};
