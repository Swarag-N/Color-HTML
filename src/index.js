/* eslint-disable require-jsdoc */
import CodeMirror from 'codemirror/lib/codemirror.js';

import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/xml/xml';

import 'codemirror/mode/css/css';

import 'codemirror/theme/material-darker.css';
import 'codemirror/lib/codemirror.css';
import './styles/style.css';

import {colorizeHueRecursively, colorizeRecursively} from './utility/colorize';
import {hexToRgb} from './utility/colorize';

// const {initializeDownload} = require('./utility/downloadImage');

import './utility/dragDrop';


const iframeD = document.getElementById('outIframe');
const iframeDocument = iframeD.contentWindow.document;
const body = iframeDocument.getElementsByTagName('body')[0];


iframeDocument.getElementsByTagName('head')[0].innerHTML = '<style></style>';
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

function colorizeIframe() {
  console.log('DDDDDDDDDDd');
  const body = iframeDocument.getElementsByTagName('body')[0];
  if (document.getElementById('hue').checked) {
    const hex = document.getElementById('nColor').value;
    colorizeHueRecursively(body, hexToRgb(hex));
  } else {
    colorizeRecursively(body);
  }
}

// function downloadDom() {
//   initializeDownload(body);
// }

// function downloadImg() {
//   console.log("Download???");
//   html2canvas(body).then((canvasElm) => {
//     let downloadFormat = document.getElementById('downloadFormat').value;
//     let imageType = "image/"+downloadFormat;
//     let link = document.getElementById('link');
//     let fileName = `ColorHTML-${getDateFormatName()}.`+downloadFormat;
//     link.setAttribute('download', fileName);
//     link.setAttribute('href', canvasElm.toDataURL(imageType).replace(
// imageType, "image/octet-stream"));
//     link.click((evt)=>{
//       evt.preventDefault()
//     });
//   });
// }

// function getDateFormatName(){
//   let d = new Date();
//   return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}-${d.getTime()}`
// }

window.colorizeIframe = colorizeIframe;
// window.downloadDom = downloadDom;
