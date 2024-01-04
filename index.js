const target = document.querySelectorAll('[data-target]');
const dataContent = document.querySelectorAll('[data-target-content]');

target.forEach(tab => {
    tab.addEventListener('click', () => {
        const setData = document.querySelector(tab.dataset.target);
        if (setData) {
            dataContent.forEach(content => {
                content.classList.remove('active');
            });
            target.forEach(t => {
                t.classList.remove('active');
            });
            tab.classList.add('active');
            setData.classList.add('active');
        } else {
            console.error('No content found for target:', tab.dataset.target);
        }
    });
});
