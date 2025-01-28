// Selección de elementos del DOM
const categoryFilter = document.getElementById("category-filter"); // Filtro de categoría
const priceMinInput = document.getElementById("price-min"); // Campo de precio mínimo
const priceMaxInput = document.getElementById("price-max"); // Campo de precio máximo
const filterButton = document.getElementById("filter-button"); // Botón de filtrar
const products = document.querySelectorAll(".product"); // Lista de productos
const noResultsMessage = document.getElementById("no-results"); // Mensaje de "sin resultados"

// Función para aplicar filtros por categoría y precio
function applyFilters() {
    const selectedCategory = categoryFilter.value; // Categoría seleccionada
    const priceMin = parseFloat(priceMinInput.value) || 0; // Precio mínimo, usa 0 si está vacío
    const priceMax = parseFloat(priceMaxInput.value) || Infinity; // Precio máximo, usa Infinity si está vacío

    let visibleProductCount = 0; // Contador de productos visibles

    products.forEach(product => {
        const productCategory = product.getAttribute("data-category"); // Categoría del producto
        const productPrice = parseFloat(product.getAttribute("data-price")); // Precio del producto

        // Verificar coincidencia con los filtros
        const matchesCategory = selectedCategory === "all" || productCategory === selectedCategory;
        const matchesPrice = productPrice >= priceMin && productPrice <= priceMax;

        if (matchesCategory && matchesPrice) {
            product.style.display = "block"; // Mostrar el producto
            visibleProductCount++;
        } else {
            product.style.display = "none"; // Ocultar el producto
        }
    });

    // Mostrar u ocultar el mensaje de "sin resultados"
    noResultsMessage.style.display = visibleProductCount === 0 ? "block" : "none";
}

// Agregar eventos para aplicar filtros automáticamente
filterButton.addEventListener("click", applyFilters);
categoryFilter.addEventListener("change", applyFilters);
priceMinInput.addEventListener("input", applyFilters);
priceMaxInput.addEventListener("input", applyFilters);



