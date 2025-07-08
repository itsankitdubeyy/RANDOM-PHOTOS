const imageContainer = document.getElementById('image-container');
const addImagesBtn = document.getElementById('add-images-btn');

// Function to get random size for images
function getRandomSize() {
    return 300 + Math.floor(Math.random() * 50);
}

// Function to generate random image URL from Picsum Photos
function getRandomImageUrl() {
    const width = getRandomSize();
    const height = getRandomSize();
    const randomId = Math.floor(Math.random() * 1000);
    
    return `https://picsum.photos/${width}/${height}?random=${randomId}`;
}

// Function to create image element
function createImageElement() {
    const imageBox = document.createElement('div');
    imageBox.classList.add('image-box');
    
    const img = document.createElement('img');
    img.src = getRandomImageUrl();
    img.alt = 'Random Image';
    
    // Handle image loading errors
    img.onerror = function() {
        // Try again with a different random ID
        this.src = getRandomImageUrl();
    };
    
    imageBox.appendChild(img);
    imageContainer.appendChild(imageBox);
}

// Function to add multiple images
function addImages(count = 6) {
    for (let i = 0; i < count; i++) {
        createImageElement();
    }
}

// Add initial images when page loads
addImages();

// Event listener for add more images button
addImagesBtn.addEventListener('click', () => {
    addImages(3); // Add 3 more images when button is clicked
});