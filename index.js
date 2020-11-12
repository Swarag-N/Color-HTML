const iframe = document.getElementById('outIframe');
iframeDocument = iframe.contentWindow.document;
const body = iframeDocument.getElementsByTagName('body')[0];
const head = (iframeDocument.getElementsByTagName('head')[0].innerHTML =
  '<style></style>');
const styleTag = iframeDocument.getElementsByTagName('style')[0];

const htmlEditor = CodeMirror.fromTextArea(document.getElementById('html'), {
  mode: 'htmlmixed',
  htmlMode: true,
  lineNumbers: true,
  smartIndent: true,
  autofocus: true,
  theme: 'material-darker',
});
htmlEditor.setSize(null, 250);
htmlEditor.on('change', (event) => {
  body.innerHTML = event.getValue();
});
htmlEditor.save();

const cssEditor = CodeMirror.fromTextArea(document.getElementById('css'), {
  lineNumbers: true,
  smartIndent: true,
  theme: 'material-darker',
  mode: 'css',
});
cssEditor.setSize(null, 250);
cssEditor.on('change', (event) => {
  styleTag.innerHTML = event.getValue();
});
cssEditor.save();


// let b = iframeDocument.getElementsByTagName("body")[0];

function downloadImg() {
  console.log('Download???');
  html2canvas(body).then((canvasElm) => {
    const downloadFormat = document.getElementById('downloadFormat').value;
    const imageType = 'image/'+downloadFormat;
    const link = document.getElementById('link');
    const fileName = `ColorHTML-${getDateFormatName()}.`+downloadFormat;
    link.setAttribute('download', fileName);
    link.setAttribute('href', canvasElm.toDataURL(imageType).replace(imageType, 'image/octet-stream'));
    link.click((evt)=>{
      evt.preventDefault();
    });
  });
}

function getDateFormatName() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}-${d.getTime()}`;
}
