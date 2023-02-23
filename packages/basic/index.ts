//新打开标签页 兼容safari浏览器
export const openLink = (url: string) => {
  const isSafari = () => {
    const { vendor } = navigator;
    return vendor.startsWith("Apple");
  };
  const openLink = (url: string) => {
    let domA = document.createElement("a");

    domA.setAttribute("href", url);
    domA.setAttribute("target", "_blank");

    document.body.appendChild(domA);

    domA.click();
    domA.remove();
  };
  if (isSafari()) {
    openLink(url);
  } else {
    window.open(url);
  }
};
