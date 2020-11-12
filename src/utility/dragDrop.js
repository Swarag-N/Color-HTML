// modified from http://html5demos.com/file-api

const htmlHandler = document.getElementById('html');
const cssHandler = document.getElementById('css');
const state = document.getElementById('status');

if (typeof window.FileReader === 'undefined') {
  state.className = 'fail';
} else {
  state.className = 'success';
  state.innerHTML = 'File API & FileReader available';
}

htmlHandler.ondragover = function() {
  this.className = 'hover';
  return false;
};
htmlHandler.ondragend = function() {
  this.className = '';
  return false;
};

htmlHandler.ondrop = function(e) {
  this.className = '';
  e.preventDefault();

  const file = e.dataTransfer.files[0];
  const reader = new FileReader();
  reader.onload = function(event) {
    console.log(event.target);
    htmlHandler.innerText = event.target.result;
  };
  console.log(file);
  reader.readAsText(file);

  return false;
};

cssHandler.ondragover = function() {
  this.className = 'hover';
  return false;
};
cssHandler.ondragend = function() {
  this.className = '';
  return false;
};

cssHandler.ondrop = function(e) {
  this.className = '';
  e.preventDefault();

  const file = e.dataTransfer.files[0];
  const reader = new FileReader();
  reader.onload = function(event) {
    console.log(event.target);
    cssHandler.innerText = event.target.result;
  };
  console.log(file);
  reader.readAsText(file);

  return false;
};
