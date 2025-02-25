// This script controls behaviour of TOC: partials/toc.html

window.onscroll = () => {
  if (document.querySelector("#post-header").scrollHeight + 120 <= window.scrollY) {
    document.querySelector("#tableofcontents").style.opacity = 1
  } else {
    document.querySelector("#tableofcontents").style.opacity = 0
  }
};