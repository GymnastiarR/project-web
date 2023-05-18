function filterProducts() {
  // Get the selected filter values
  const filters = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);

  // Get all the product items
  const products = document.querySelectorAll('.pro');

  // Loop through the product items and show/hide based on filters
  products.forEach(product => {
    const productCategories = product.getAttribute('data-categories').split(',');

    // Check if the product has any of the selected categories
    const hasSelectedCategories = filters.some(category => productCategories.includes(category));

    // Show/hide the product's div based on the selected categories
    product.style.display = hasSelectedCategories ? 'block' : 'none';
  });
}

const filterForm = document.getElementById('filterForm');
filterForm.addEventListener('submit', event => {
  event.preventDefault();
  filterProducts();
});