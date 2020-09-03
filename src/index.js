function getBrowserVersion(userAgent = navigator.userAgent) {
  const execUA = (reg, ua, name) => {
    const browser = {};
    const versionArr = reg.exec(ua);
    if (versionArr) {
      browser.name = name;
      browser.versionStr = versionArr[0].split("/")[1];
      browser.version = parseInt(browser.versionStr);
    } 
    return browser;
  }
  // Chrome 
  if (/Chrome/.test(userAgent)) {
    // Opera blink
    if (/OPR/.test(userAgent)) {
      return execUA(/OPR\/(\d+.?)+/, userAgent, 'Opera');
    } else {
      return execUA(/Chrome\/(\d+.?)+/, userAgent, 'Chrome');
    }
  }
  // Opera Presto
  if (/Presto/.test(userAgent)) {
    return execUA(/Version\/(\d+.?)+/, userAgent, 'Opera');
  }
  // Safari 
  if (/Safari/.test(userAgent) && /Version/.test(userAgent)) {
    return execUA(/Version\/(\d+.?)+/, userAgent, 'Safari');
  }
  // Firefox
  if (/Firefox/.test(userAgent)) {
    return execUA(/Firefox\/(\d+.?)+/, userAgent, 'Firefox');
  }
  // Edge
  if (/Edg/.test(userAgent)) {
    return execUA(/Edg\/(\d+.?)+/, userAgent, 'Edge');
  }
  // IE
  if (/MSIE/.test(userAgent)) {
    const versionArr = /MSIE\s(\d+.?)+/.exec(userAgent);
    let browser = {};
    if (versionArr) {
      browser.name = "IE";
      browser.versionStr = versionArr[0].split(" ")[1];
      browser.version = parseInt(browser.versionStr);
    }
    return browser;
  }
  return {};
}