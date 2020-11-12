function colorizeRecursively(domEle) {
  if (domEle.childElementCount) {
    for (i of domEle.children) {
      i.style.backgroundColor =
        '#' + (((1 << 24) * Math.random()) | 0).toString(16);
      colorizeRecursively(i);
    }
  }
}

function colorizeHueRecursively(domEle, rgba) {
  if (domEle.childElementCount) {
    for (i of domEle.children) {
      const c = `rgba(${rgba.r},${rgba.g},${rgba.b},${Math.random()})`;
      i.style.backgroundColor = c;
      colorizeHueRecursively(i, rgba);
    }
  }
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ?
    {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    } :
    null;
}

// function colorizeIframe() {
//   let body = iframeDocument.getElementsByTagName("body")[0];
//   if (document.getElementById("hue").checked) {
//     let hex = document.getElementById("nColor").value;
//     colorizeHueRecursively(body, hexToRgb(hex));
//   } else {
//     colorizeRecursively(body);
//   }
// }

module.exports={
  colorizeHueRecursively,
  colorizeRecursively,
  hexToRgb,
};
