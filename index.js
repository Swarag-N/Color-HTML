let b = iframeDocument.getElementsByTagName("body")[0];

function downloadImg() {
  console.log("Download???");
  html2canvas(b).then((canvasElm) => {
    let downloadFormat = document.getElementById('downloadFormat').value;
    let imageType = "image/"+downloadFormat;
    let link = document.getElementById('link');
    let fileName = `ColorHTML-${getDateFormatName()}.`+downloadFormat;
    link.setAttribute('download', fileName);
    link.setAttribute('href', canvasElm.toDataURL(imageType).replace(imageType, "image/octet-stream"));
    link.click((evt)=>{
      evt.preventDefault()
    });
  });
}

function getDateFormatName(){
  let d = new Date();
  return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}-${d.getTime()}`
}