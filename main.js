// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Lotto number generator
document.getElementById('generate-btn').addEventListener('click', () => {
    const numbersContainer = document.querySelector('.numbers-container');
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = number;
        numberDiv.style.backgroundColor = getRandomColor();
        numbersContainer.appendChild(numberDiv);
    });
});

function getRandomColor() {
    const colors = [
        '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFA1'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}
