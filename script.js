document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    this.textContent = document.body.classList.contains('dark') ? '🌙' : '☀️';
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

document.getElementById('membership-button').addEventListener('click', function() {
    const cubes = document.getElementById('cubes');
    cubes.classList.toggle('hidden');
});

