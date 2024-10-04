const products = [
    '23442-Laptop',
    '24605-Smartphone',
    '28490-Shoes',
    '22341-Watch',
    '23411-Headphones',
    '23414-Camera',
    '34566-Tablet',
    '77765-Sunglasses',
    '34523-Handbag',
    '34444-Dress',
    'Jeans',
    'T-shirt',
    'Blender',
    'Microwave',
    'Refrigerator',
    'Sofa',
    'Dining Table',
    'Television',
    'Air Conditioner',
    'Washing Machine',
    'Sneakers',
    'Backpack',
    'Perfume',
    'Makeup Kit',
    'Skincare Set',
    '09648-cambodia',
    '20055-bia-បៀយែ',
    '89770-cua-របស់'
];

function searchItem() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const results = products.filter(product => product.toLowerCase().includes(query));

    const resultContainer = document.getElementById('searchResults');
    resultContainer.innerHTML = '';  // Clear previous results

    if (results.length > 0) {
        results.forEach(item => {
            const div = document.createElement('div');
            div.textContent = item;
            div.classList.add('result-item');
            resultContainer.appendChild(div);
        });
    } else {
        resultContainer.textContent = 'No products found';
    }
}

// Event listener for live search
document.getElementById('searchInput').addEventListener('input', () => {
    searchItem();
});
