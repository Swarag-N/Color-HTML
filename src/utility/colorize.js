/**
 * recursively colorizes the DOM Elements.
 * @param {domElemnent} domEle ex:Body,Div
 */
function colorizeRecursively(domEle) {
  if (domEle.childElementCount) {
    for (i of domEle.children) {
      i.style.backgroundColor =
        '#' + (((1 << 24) * Math.random()) | 0).toString(16);
      colorizeRecursively(i);
    }
  }
}


/**
 * recursively colorizes the DOM Elements in the given HUE.
 * @param {domElement} domEle ex:Body,Div
 * @param {object} rgba {r:1,g:1,b:1}
 */
function colorizeHueRecursively(domEle, rgba) {
  if (domEle.childElementCount) {
    for (i of domEle.children) {
      const c = `rgba(${rgba.r},${rgba.g},${rgba.b},${Math.random()})`;
      i.style.backgroundColor = c;
      colorizeHueRecursively(i, rgba);
    }
  }
}

/**
 * converts hex color code to RGB Object
 * @param {string} hex #12abc3
 * @return {object} {r:1,g:1,b:1}
 */
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


module.exports={
  colorizeHueRecursively,
  colorizeRecursively,
  hexToRgb,
};
