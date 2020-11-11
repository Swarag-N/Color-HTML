function colorizeRecursively(domEle) {
    if (domEle.childElementCount) {
      for (i of domEle.children) {
        i.style.backgroundColor =
          "#" + (((1 << 24) * Math.random()) | 0).toString(16);
        colorizeRecursively(i);
      }
    }
  }
  
  function colorizeIframe() {
    let body = iframeDocument.getElementsByTagName("body")[0];
    console.log("AAAAAAAAAAAAAAAAAAA");
    colorizeRecursively(body);
  }
  