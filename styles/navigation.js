window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("main-nav").classList.add('scrolled');
  } else {
    document.getElementById("main-nav").classList.remove('scrolled');
  }
}