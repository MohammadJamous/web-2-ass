let count = 0;
const counterEl = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');

incrementBtn.addEventListener('click', () => {
    count++;
    counterEl.textContent = count;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    counterEl.textContent = count;
});
