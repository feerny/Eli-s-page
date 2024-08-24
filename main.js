document.querySelectorAll('.accordion').forEach((accordion) => {
    accordion.addEventListener('click', function() {
        this.classList.toggle('active');

        const content = this.querySelector('.accordion-content');
        if (this.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = null;
        }
    });
});
