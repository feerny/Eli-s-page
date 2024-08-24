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

document.getElementById('toggleButton').addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    const upArrow = document.getElementById('UpArrow');
    const downArrow = document.getElementById('DownArrow');
    downArrow.classList.toggle('close');
    upArrow.classList.toggle('close');
    imageContainer.classList.toggle('collapsed');
});

