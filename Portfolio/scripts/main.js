function toggleNav() {
  var icons = document.getElementById("nav-icons");
  var navs = document.getElementById("nav-navs");
  if (navs.style.display === "none") {
    navs.style.display = "";
    icons.style.display = "none";
  } else {
    navs.style.display = "none";
    icons.style.display = "";
  }
}

var clicked;

function scrollTo(element) {
  window.scroll({
    behavior: "smooth",
    left: 0,
    top: element.offsetTop - 80
  });
}

function updateColor(btn) {
  var navsDiv = document.getElementById("nav-navs");
  for (let i = 0; i < navsDiv.children.length; i++) {
    if (navsDiv.children[i].classList.contains("active")) {
      navsDiv.children[i].classList.remove("active");
    }
  }
  btn.classList.add("active");
}

function navScroll(btn) {
  clicked = true;
  updateColor(btn);
  var id = btn.id;
  var element = document.getElementById(id + "-sec");
  scrollTo(element);
  setTimeout(function() {
    clicked = false;
  }, 1000);
}

function isTop(element) {
  return (
    document.body.scrollTop >= element.offsetTop - 80 ||
    document.documentElement.scrollTop >= element.offsetTop - 80
  );
}

window.onscroll = function() {
  if (!clicked) {
    console.log(clicked);
    let work = document.getElementById("work-sec");
    let design = document.getElementById("design-sec");
    let learning = document.getElementById("learning-sec");

    if (isTop(learning)) {
      let btn = document.getElementById("learning");
      updateColor(btn);
    } else if (isTop(design)) {
      let btn = document.getElementById("design");
      updateColor(btn);
    } else if (isTop(work)) {
      let btn = document.getElementById("work");
      updateColor(btn);
    } else {
      let btn = document.getElementById("about");
      updateColor(btn);
    }
  }
};
