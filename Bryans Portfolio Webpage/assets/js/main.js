// Highlight current page in navigation
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-item a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.backgroundColor = 'var(--primary)';
            link.style.fontWeight = 'bold';
        }
        
        link.addEventListener('mouseenter', () => {
            if (link.getAttribute('href') !== currentPage) {
                link.style.transform = 'translateX(10px)';
            }
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateX(0)';
        });
    });
});