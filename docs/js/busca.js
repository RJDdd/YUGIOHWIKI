document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("keyup", e => {
    const searchValue = e.target.value.toLowerCase();

    if (e.key === "Escape") {
      e.target.value = "";
      searchValue = "";
    }

    document.querySelectorAll(".articulo").forEach(article => {
      const title = article.getAttribute("data-title").toLowerCase();
      if (title.includes(searchValue)) {
        article.classList.remove("filtro");
      } else {
        article.classList.add("filtro");
      }
    });
  });
});
