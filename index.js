
function colorizeRecursively(domEle) {
  if (domEle.childElementCount) {
    for (i of domEle.children) {
      console.log(i);
          i.style.backgroundColor =
          "#" + (((1 << 24) * Math.random()) | 0).toString(16);
          colorizeRecursively(i);
        }
  }
}

var c = document.body
colorizeRecursively(c)

