document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search');
    const searchInput = document.querySelector('.search input');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const query = searchInput.value.toLowerCase();
        const recipes = document.querySelectorAll('.recipe-item');

        recipes.forEach(recipe => {
            const title = recipe.querySelector('h3').textContent.toLowerCase();
            if (title.includes(query)) {
                recipe.style.display = 'block';
            } else {
                recipe.style.display = 'none';
            }
        });
    });
});

