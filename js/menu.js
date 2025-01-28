document.addEventListener('DOMContentLoaded', function() {
    const toggleSubmenus = document.querySelectorAll('.toggle-submenu');

    toggleSubmenus.forEach(function(toggleSubmenu) {
        toggleSubmenu.addEventListener('click', function(event) {
            event.preventDefault();
            const submenu = this.nextElementSibling;
            submenu.classList.toggle('show');
        });
    });
});
