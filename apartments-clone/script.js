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
