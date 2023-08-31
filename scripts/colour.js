// Function to generate a random hex color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add event listeners to all cards with the specified class
const cards = document.querySelectorAll('.hoverable-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const randomColor = getRandomColor();
        card.style.backgroundColor = randomColor;
    });

    card.addEventListener('mouseleave', () => {
        card.style.backgroundColor = '#ffff'; // Reset to default background color
    });
});