let scrollTopBtn = document.getElementsByClassName(classNames: "scrollTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}


function scrollTop() {
    document.documentElement.scrollTop = 0;
}