document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const suggestions = document.getElementById('suggestions');

  const items = [
    { name: 'Inicio', link: '/' },
    { name: 'Arquetipos', link: '/blog/' },
    { name: 'Alanegra', link: '/alanegra/' },
    { name: 'Aliado de la justicia', link: '/aliado-de-la-justicia' },
    { name: 'Amazoness', link: '/amazoness' },
    { name: 'Artistamigo', link: '/artistamigo' },
    { name: 'Brillo Negro', link: '/brillo-negro' },
    { name: 'Buster Blader', link: '/buster-blader' },
    { name: 'Cuidadores de tumbas', link: '/cuidadores-de-tumbas' },
    { name: 'Dragon Blanco', link: '/dragon-blanco' },
    { name: 'Dragon del Trueno', link: '/dragon-del-trueno' },
    { name: 'Dragon Negro', link: '/dragon-negro' },
    { name: 'Guerrero Magnetico', link: '/guerrero-magnetico' },
    { name: 'Harpies', link: '/harpies' },
    { name: 'Heroes Elementales', link: '/heroes-elementales' },
    { name: 'Hieratico', link: '/hieratico' },
    { name: 'Lunaluz', link: '/lunaluz' },
    { name: 'Mago Negro', link: '/mago-negro' },
    { name: 'Mekk Caballero', link: '/mekk-caballero' },
    { name: 'Naturia', link: '/naturia' },
    { name: 'Ninja', link: '/ninja' },
    { name: 'Toon', link: '/toon' }
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
