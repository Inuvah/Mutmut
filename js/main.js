function dropFunctionOne() {
    document.getElementById("dropdown").classList.toggle("show");
}

function dropFunctionTwo() {
    document.getElementById("dropdown-two").classList.toggle("show");
}

function dropFunctionThree() {
    document.getElementById("dropdown-three").classList.toggle("show");
}

function dropFunctionFour() {
    document.getElementById("dropdown-four").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.nav-plakater')) {
      var dropdowns = document.getElementsByClassName("dropdown-one");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
    if (!event.target.matches('.nav-tekstil')) {
        var dropdowns = document.getElementsByClassName("dropdown-two");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    if (!event.target.matches('.nav-køkken')) {
    var dropdowns = document.getElementsByClassName("dropdown-three");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        }
    }
    }
    if (!event.target.matches('.nav-leg')) {
        var dropdowns = document.getElementsByClassName("dropdown-four");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
  }


  window.addEventListener("scroll", function () {
    let header = document.getElementById("opacity");
    let header2 = document.getElementById("opacity2");
    let header3 = document.getElementById("opacity3");
    let header4 = document.getElementById("opacity4");
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    header.style.opacity = 1 - 700 / scrollTop + 1;
    header2.style.opacity = 1 - 2100 / scrollTop + 1;
    header3.style.opacity = 1 - 3500 / scrollTop + 1;
    header4.style.opacity = 1 - 4500 / scrollTop + 1;
 });
  