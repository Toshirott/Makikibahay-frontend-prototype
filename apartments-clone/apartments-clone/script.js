document.addEventListener('DOMContentLoaded', () => {
    // Tab switching logic
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
        });
    });

    // Search button interaction
    const searchBtn = document.querySelector('.btn-search');
    const searchInput = document.querySelector('.search-input');

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if(query) {
            alert(`Searching for: ${query} \n(This is a UI clone demonstration)`);
        } else {
            alert('Please enter a location to search.');
            searchInput.focus();
        }
    });

    // Contact button interaction
    const contactBtns = document.querySelectorAll('.btn-contact');
    
    contactBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.listing-card');
            const address = card.querySelector('.listing-address').innerText;
            alert(`Contacting property at: ${address}`);
        });
    });
});

    // Enhanced Search Button for index.html to redirect to search-results.html
    const heroBtnSearch = document.querySelector('.hero .btn-search');
    if (heroBtnSearch) {
        // Remove previous alert listener by cloning or overriding it
        heroBtnSearch.replaceWith(heroBtnSearch.cloneNode(true));
        const newHeroBtnSearch = document.querySelector('.hero .btn-search');
        
        newHeroBtnSearch.addEventListener('click', () => {
             const input = document.querySelector('.hero .search-input');
             const query = input.value.trim();
             if(query) {
                  window.location.href = 'search-results.html?q=' + encodeURIComponent(query);
             } else {
                  // Default to near me
                  window.location.href = 'search-results.html';
             }
        });
    }

    // Favorite heart toggle
    const favButtons = document.querySelectorAll('.btn-favorite');
    favButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const icon = btn.querySelector('i');
            if (icon.classList.contains('fa-regular')) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
                icon.style.color = '#ff385c';
            } else {
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
                icon.style.color = ''; // reset
            }
        });
    });

document.addEventListener('DOMContentLoaded', () => {
    // Global Sidebar Menu Toggle
    const menuToggleBtns = document.querySelectorAll('.menu-toggle-btn');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const sideMenu = document.getElementById('globalSideMenu');
    const overlay = document.getElementById('globalMenuOverlay');

    function openMenu() {
        if(sideMenu && overlay) {
            sideMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    }

    function closeMenu() {
        if(sideMenu && overlay) {
            sideMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    menuToggleBtns.forEach(btn => btn.addEventListener('click', openMenu));
    if(closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
    if(overlay) overlay.addEventListener('click', closeMenu);
});
