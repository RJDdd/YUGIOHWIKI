document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const suggestions = document.getElementById('suggestions');

  const items = [
    { name: 'Alanegra', link: 'https://rjddd.github.io/YUGIOHWIKI/alanegra/' },
    { name: 'Aliado de la justicia', link: 'https://rjddd.github.io/YUGIOHWIKI/aliado-de-la-justicia/' },
    { name: 'Amazoness', link: 'https://rjddd.github.io/YUGIOHWIKI/amazoness/' },
    { name: 'Artistamigo', link: 'https://rjddd.github.io/YUGIOHWIKI/artistamigo/' },
    { name: 'Brillo Negro', link: 'https://rjddd.github.io/YUGIOHWIKI/brillo-negro/' },
    { name: 'Buster Blader', link: 'https://rjddd.github.io/YUGIOHWIKI/buster-blader/' },
    { name: 'Cuidadores de tumbas', link: 'https://rjddd.github.io/YUGIOHWIKI/cuidadores-de-tumbas/' },
    { name: 'Dragon Blanco', link: 'https://rjddd.github.io/YUGIOHWIKI/dragon-blanco/' },
    { name: 'Dragon del Trueno', link: 'https://rjddd.github.io/YUGIOHWIKI/dragon-del-trueno/' },
    { name: 'Dragon Negro', link: 'https://rjddd.github.io/YUGIOHWIKI/dragon-negro/' },
    { name: 'Guerrero Magnetico', link: 'https://rjddd.github.io/YUGIOHWIKI/guerrero-magnetico/' },
    { name: 'Harpies', link: 'https://rjddd.github.io/YUGIOHWIKI/harpies/' },
    { name: 'Heroes Elementales', link: 'https://rjddd.github.io/YUGIOHWIKI/heroes-elementales/' },
    { name: 'Hieratico', link: 'https://rjddd.github.io/YUGIOHWIKI/hieratico/' },
    { name: 'Lunaluz', link: 'https://rjddd.github.io/YUGIOHWIKI/lunaluz/' },
    { name: 'Mago Negro', link: 'https://rjddd.github.io/YUGIOHWIKI/mago-negro/' },
    { name: 'Mekk Caballero', link: 'https://rjddd.github.io/YUGIOHWIKI/mekk-caballero/' },
    { name: 'Naturia', link: 'https://rjddd.github.io/YUGIOHWIKI/naturia/' },
    { name: 'Ninja', link: 'https://rjddd.github.io/YUGIOHWIKI/ninja/' },
    { name: 'Toon', link: 'https://rjddd.github.io/YUGIOHWIKI/toon/' }
    // Agrega más elementos aquí
  ];

  searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();
    suggestions.innerHTML = '';

    if (query) {
      const filteredItems = items.filter(item => item.name.toLowerCase().includes(query));
      filteredItems.forEach(item => {
        const suggestionItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = item.link;
        link.textContent = item.name;
        suggestionItem.appendChild(link);
        suggestions.appendChild(suggestionItem);
      });
    }
  });
});
