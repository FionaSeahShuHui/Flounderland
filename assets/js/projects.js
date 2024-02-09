/**
 * Easy selector helper function
 */
const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all);
  if (selectEl) {
    if (all) {
      selectEl.forEach((e) => e.addEventListener(type, listener));
    } else {
      selectEl.addEventListener(type, listener);
    }
  }
};

/**
 * Porfolio isotope and filter
 */
window.addEventListener("load", () => {
  let projectsContainer = select(".projectSummary");
  if (projectsContainer) {
    let projectsIsotope = new Isotope(projectsContainer, {
      itemSelector: ".projectCardGallery",
      layoutMode: "fitRows",
    });

    let projectsFilters = select("#projectFilterBar li", true);

    on(
      "click",
      "#projectFilterBar li",
      function (e) {
        e.preventDefault();
        projectsFilters.forEach(function (el) {
          el.classList.remove("filterActive");
        });
        this.classList.add("filterActive");

        projectsIsotope.arrange({
          filter: this.getAttribute("data-filter"),
        });
        projectsIsotope.on("arrangeComplete", function () {
          AOS.refresh();
        });
      },
      true
    );
  }
});
