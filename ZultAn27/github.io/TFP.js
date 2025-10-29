const toggleButtons = document.querySelectorAll('.toggle-btn')

toggleButtons.forEach(button => {
    button.addEventListener('click', (event) => {
          
    const card = event.currentTarget.closest('.card');

    const moreInfo = card.querySelector('.more-info');

    moreInfo.classList.toggle('hidden');


    if (moreInfo.classList.contains('hidden')) {
        event.currentTarget.textContent = 'Read more';
    } else {
        event.currentTarget.textContent = 'close';
    }
    })
})