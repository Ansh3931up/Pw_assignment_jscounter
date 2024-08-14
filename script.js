document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');
    const resetButton = document.getElementById('reset');

    let count = 0;

    function updateCounter() {
        counterElement.textContent = count;
    }

    decrementButton.addEventListener('click', () => {
        count--;
        updateCounter();
    });

    incrementButton.addEventListener('click', () => {
        count++;
        updateCounter();
    });

    resetButton.addEventListener('click', () => {
        count = 0;
        updateCounter();
    });
});