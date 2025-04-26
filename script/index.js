const gear = document.getElementById('setting');
gear.addEventListener('click', () => {
    const modalPopUp = document.getElementById('modal');
    modalPopUp.classList.remove('hidden');
});

const close = document.getElementById('close');
close.addEventListener('click', () => {
    const modalPopUp = document.getElementById('modal');
    modalPopUp.classList.add('hidden');
})