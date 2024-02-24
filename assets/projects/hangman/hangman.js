// Show button when user scrolls down 20px from the top of the document
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var scrollTopBtn = document.getElementById("scrollTopBtn");
  var footer = document.getElementById("footer");
  var footerOffset = footer.offsetTop;
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

  if (scrollTop > 20) {
    scrollTopBtn.style.display = "block";
    if (scrollTop + window.innerHeight > footerOffset) {
      scrollTopBtn.style.bottom = footer.offsetHeight + 10 + "px";
    } else {
      scrollTopBtn.style.bottom = "20px";
    }
  } else {
    scrollTopBtn.style.display = "none";
  }
}

// Scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
