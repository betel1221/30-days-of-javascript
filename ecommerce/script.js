// Product Data
const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        description: "Experience immersive sound with these comfortable and stylish wireless headphones.",
        price: 79.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Headphones",
        category: "electronics"
    },
    {
        id: 2,
        name: "Smart Fitness Tracker",
        description: "Monitor your health and fitness goals with this advanced smart tracker.",
        price: 49.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Fitness+Tracker",
        category: "electronics"
    },
    {
        id: 3,
        name: "Portable Power Bank 20000mAh",
        description: "Never run out of battery again! High-capacity power bank for multiple charges.",
        price: 34.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Power+Bank",
        category: "electronics"
    },
    {
        id: 4,
        name: "4K Ultra HD Smart TV",
        description: "Immerse yourself in stunning visuals with this 55-inch 4K Smart TV.",
        price: 499.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Smart+TV",
        category: "electronics"
    },
    {
        id: 5,
        name: "Ergonomic Office Chair",
        description: "Work in comfort with this adjustable ergonomic office chair.",
        price: 189.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Office+Chair",
        category: "furniture"
    },
    {
        id: 6,
        name: "Stainless Steel Coffee Maker",
        description: "Brew your perfect cup of coffee with this sleek coffee maker.",
        price: 59.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Coffee+Maker",
        category: "appliances"
    },
    {
        id: 7,
        name: "Smartphone Pro",
        description: "A powerful smartphone with cutting-edge technology.",
        price: 299.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Smartphone",
        category: "electronics"
    },
    {
        id: 8,
        name: "Gaming Laptop",
        description: "High-performance laptop for gaming enthusiasts.",
        price: 1299.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Gaming+Laptop",
        category: "electronics"
    },
    {
        id: 9,
        name: "Modern Sofa",
        description: "Stylish and comfortable sofa for your living room.",
        price: 399.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Sofa",
        category: "furniture"
    },
    {
        id: 10,
        name: "Microwave Oven",
        description: "Compact microwave for quick and easy meals.",
        price: 129.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Microwave",
        category: "appliances"
    },
    {
        id: 11,
        name: "Wireless Mouse",
        description: "Precision wireless mouse for productivity.",
        price: 29.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Mouse",
        category: "electronics"
    },
    {
        id: 12,
        name: "Desk Lamp",
        description: "Adjustable LED desk lamp for your workspace.",
        price: 39.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Desk+Lamp",
        category: "furniture"
    },
    {
        id: 13,
        name: "Air Fryer",
        description: "Healthy cooking with this efficient air fryer.",
        price: 99.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Air+Fryer",
        category: "appliances"
    },
    {
        id: 14,
        name: "Tablet X",
        description: "Versatile tablet for work and entertainment.",
        price: 199.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Tablet",
        category: "electronics"
    },
    {
        id: 15,
        name: "Bookshelf",
        description: "Elegant bookshelf for your book collection.",
        price: 149.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Bookshelf",
        category: "furniture"
    },
    {
        id: 16,
        name: "Blender",
        description: "Powerful blender for smoothies and more.",
        price: 59.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Blender",
        category: "appliances"
    },
    {
        id: 17,
        name: "Gaming Console",
        description: "Next-gen gaming console with stunning graphics.",
        price: 399.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Gaming+Console",
        category: "electronics"
    },
    {
        id: 18,
        name: "Dining Table",
        description: "Spacious dining table for family meals.",
        price: 249.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Dining+Table",
        category: "furniture"
    },
    {
        id: 19,
        name: "Washing Machine",
        description: "Efficient washing machine for your laundry needs.",
        price: 349.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Washing+Machine",
        category: "appliances"
    },
    {
        id: 20,
        name: "Smartwatch",
        description: "Track your fitness with this stylish smartwatch.",
        price: 149.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Smartwatch",
        category: "electronics"
    },
    {
        id: 21,
        name: "Office Desk",
        description: "Sturdy desk for your home office.",
        price: 199.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Office+Desk",
        category: "furniture"
    },
    {
        id: 22,
        name: "Toaster Oven",
        description: "Perfect for quick toasting and baking.",
        price: 69.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Toaster+Oven",
        category: "appliances"
    },
    {
        id: 23,
        name: "External Hard Drive",
        description: "High-capacity storage for your data.",
        price: 89.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Hard+Drive",
        category: "electronics"
    },
    {
        id: 24,
        name: "Coffee Table",
        description: "Modern coffee table for your living room.",
        price: 129.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Coffee+Table",
        category: "furniture"
    },
    {
        id: 25,
        name: "Vacuum Cleaner",
        description: "Powerful vacuum for a clean home.",
        price: 139.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Vacuum+Cleaner",
        category: "appliances"
    },
    {
        id: 26,
        name: "Wireless Keyboard",
        description: "Ergonomic wireless keyboard for typing.",
        price: 59.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Keyboard",
        category: "electronics"
    },
    {
        id: 27,
        name: "King Bed",
        description: "Luxurious king-size bed for better sleep.",
        price: 599.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=King+Bed",
        category: "furniture"
    },
    {
        id: 28,
        name: "Electric Kettle",
        description: "Fast-boiling electric kettle for tea.",
        price: 39.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Electric+Kettle",
        category: "appliances"
    },
    {
        id: 29,
        name: "Digital Camera",
        description: "High-resolution camera for photography.",
        price: 299.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Camera",
        category: "electronics"
    },
    {
        id: 30,
        name: "Dresser",
        description: "Spacious dresser for your clothes.",
        price: 179.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Dresser",
        category: "furniture"
    },
    {
        id: 31,
        name: "Dishwasher",
        description: "Efficient dishwasher for your kitchen.",
        price: 449.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Dishwasher",
        category: "appliances"
    },
    {
        id: 32,
        name: "Gaming Mouse",
        description: "Precision gaming mouse with RGB lighting.",
        price: 49.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Gaming+Mouse",
        category: "electronics"
    },
    {
        id: 33,
        name: "TV Stand",
        description: "Stylish stand for your television.",
        price: 99.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=TV+Stand",
        category: "furniture"
    },
    {
        id: 34,
        name: "Food Processor",
        description: "Versatile food processor for meal prep.",
        price: 89.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Food+Processor",
        category: "appliances"
    },
    {
        id: 35,
        name: "Home Theater System",
        description: "Immersive audio with this home theater system.",
        price: 349.99,
        image: "https://placehold.co/400x300/F0F4F8/334155?text=Home+Theater",
        category: "electronics"
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let filteredProducts = [...products];

// DOM Elements (only initialize if they exist)
const productGrid = document.getElementById('product-grid');
const featuredProducts = document.getElementById('featured-products');
const cartCount = document.getElementById('cart-count');
const cartButton = document.getElementById('cart-button');
const cartModal = document.getElementById('cart-modal');
const cartContent = document.getElementById('cart-content');
const closeCartModal = document.getElementById('close-cart-modal');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalSpan = document.getElementById('cart-total');
const emptyCartMessage = document.getElementById('empty-cart-message');
const productDetailModal = document.getElementById('product-detail-modal');
const productDetailContent = document.getElementById('product-detail-content');
const closeDetailModal = document.getElementById('close-detail-modal');
const detailProductName = document.getElementById('detail-product-name');
const detailProductImage = document.getElementById('detail-product-image');
const detailProductDescription = document.getElementById('detail-product-description');
const detailProductPrice = document.getElementById('detail-product-price');
const addToCartDetailButton = document.getElementById('add-to-cart-detail');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const categoryFilter = document.getElementById('category-filter');
const sortFilter = document.getElementById('sort-filter');
const loadingSpinner = document.getElementById('loading-spinner');
const toastNotification = document.getElementById('toast-notification');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const contactForm = document.getElementById('contact-form');

// Theme Toggle
function toggleTheme() {
    const isDark = document.body.classList.contains('dark-mode');
    document.body.classList.toggle('dark-mode', !isDark);
    document.body.classList.toggle('light-mode', isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    updateThemeIcon();
}

function updateThemeIcon() {
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>';
    } else {
        themeIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>';
    }
}

// Update Cart Count
function updateCartCount() {
    if (cartCount) {
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
}

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Show Toast Notification
function showToast(message) {
    if (toastNotification) {
        toastNotification.textContent = message;
        toastNotification.classList.remove('hidden');
        toastNotification.classList.add('show');
        setTimeout(() => {
            toastNotification.classList.remove('show');
            setTimeout(() => toastNotification.classList.add('hidden'), 300);
        }, 3000);
    }
}

// Render Products
function renderProducts(container, productsToRender = filteredProducts, limit = null) {
    if (!container) return;
    container.innerHTML = '';
    const productsToShow = limit ? productsToRender.slice(0, limit) : productsToRender;
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-details">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description.substring(0, 70)}...</p>
                <div class="product-card-bottom">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" data-product-id="${product.id}">
                        <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                        Add
                    </button>
                </div>
            </div>
        `;
        productCard.querySelector('img').onerror = function() {
            this.src = `https://placehold.co/400x300/F0F4F8/334155?text=Image+Error`;
        };
        container.appendChild(productCard);

        productCard.querySelector('.add-to-cart-btn').addEventListener('click', (event) => {
            event.stopPropagation();
            const productId = parseInt(event.currentTarget.dataset.productId);
            addToCart(productId);
        });

        productCard.addEventListener('click', () => {
            showProductDetail(product.id);
        });
    });
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        saveCart();
        updateCartCount();
        renderCartItems();
        showToast(`${product.name} added to cart!`);
        if (cartModal) showCartModal();
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCartItems();
}

// Update Cart Quantity
function updateCartQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            saveCart();
            updateCartCount();
            renderCartItems();
        }
    }
}

// Render Cart Items
function renderCartItems() {
    if (!cartItemsContainer) return;
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        emptyCartMessage.classList.remove('hidden');
        cartItemsContainer.classList.add('hidden');
    } else {
        emptyCartMessage.classList.add('hidden');
        cartItemsContainer.classList.remove('hidden');
        cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item';
            cartItemDiv.innerHTML = `
                <div class="cart-item-details">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
                    </div>
                </div>
                <div class="cart-item-actions">
                    <input type="number" min="1" value="${item.quantity}" data-product-id="${item.id}" class="quantity-input">
                    <button data-product-id="${item.id}" class="remove-from-cart-btn">×</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemDiv);

            total += item.price * item.quantity;
        });
    }

    if (cartTotalSpan) cartTotalSpan.textContent = `$${total.toFixed(2)}`;

    cartItemsContainer.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', (event) => {
            const productId = parseInt(event.target.dataset.productId);
            const newQuantity = parseInt(event.target.value);
            updateCartQuantity(productId, newQuantity);
        });
    });

    cartItemsContainer.querySelectorAll('.remove-from-cart-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = parseInt(event.target.dataset.productId);
            removeFromCart(productId);
        });
    });
}

// Show Product Detail Modal
function showProductDetail(productId) {
    if (!productDetailModal) return;
    const product = products.find(p => p.id === productId);
    if (product) {
        detailProductName.textContent = product.name;
        detailProductImage.src = product.image;
        detailProductDescription.textContent = product.description;
        detailProductPrice.textContent = `$${product.price.toFixed(2)}`;
        addToCartDetailButton.dataset.productId = product.id;

        productDetailModal.classList.remove('hidden');
        setTimeout(() => {
            productDetailContent.classList.remove('scale-95', 'opacity-0');
            productDetailContent.classList.add('scale-100', 'opacity-100');
        }, 10);
    }
}

// Hide Product Detail Modal
function hideProductDetailModal() {
    if (!productDetailModal) return;
    productDetailContent.classList.remove('scale-100', 'opacity-100');
    productDetailContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        productDetailModal.classList.add('hidden');
    }, 300);
}

// Show Cart Modal
function showCartModal() {
    if (!cartModal) return;
    renderCartItems();
    cartModal.classList.remove('hidden');
    setTimeout(() => {
        cartContent.classList.remove('scale-95', 'opacity-0');
        cartContent.classList.add('scale-100', 'opacity-100');
    }, 10);
}

// Hide Cart Modal
function hideCartModal() {
    if (!cartModal) return;
    cartContent.classList.remove('scale-100', 'opacity-100');
    cartContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        cartModal.classList.add('hidden');
    }, 300);
}

// Filter and Sort Products
function applyFilters() {
    if (!productGrid) return;
    let filtered = [...products];

    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    if (searchTerm) {
        filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm));
    }

    const category = categoryFilter ? categoryFilter.value : 'all';
    if (category !== 'all') {
        filtered = filtered.filter(product => product.category === category);
    }

    const sortOption = sortFilter ? sortFilter.value : 'default';
    if (sortOption === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    }

    filteredProducts = filtered;
    renderProducts(productGrid);
}

// Simulate Loading
function simulateLoading(container) {
    if (!container || !loadingSpinner) return;
    loadingSpinner.classList.remove('hidden');
    container.classList.add('hidden');
    setTimeout(() => {
        loadingSpinner.classList.add('hidden');
        container.classList.remove('hidden');
        renderProducts(container, filteredProducts, container.id === 'featured-products' ? 3 : null);
    }, 1000);
}

// Handle Contact Form Submission
function handleContactForm(event) {
    if (!contactForm) return;
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    showToast('Message sent successfully!');
    contactForm.reset();
}

// Debounce Function
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(`${savedTheme}-mode`);
    updateThemeIcon();

    // Theme Toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Cart and Product Listeners
    updateCartCount();
    if (productGrid) simulateLoading(productGrid);
    if (featuredProducts) simulateLoading(featuredProducts);

    if (cartButton) cartButton.addEventListener('click', showCartModal);
    if (closeCartModal) closeCartModal.addEventListener('click', hideCartModal);
    if (productDetailModal) {
        productDetailModal.addEventListener('click', (event) => {
            if (event.target === productDetailModal) hideProductDetailModal();
        });
    }
    if (closeDetailModal) closeDetailModal.addEventListener('click', hideProductDetailModal);
    if (cartModal) {
        cartModal.addEventListener('click', (event) => {
            if (event.target === cartModal) hideCartModal();
        });
    }
    if (addToCartDetailButton) {
        addToCartDetailButton.addEventListener('click', (event) => {
            const productId = parseInt(event.currentTarget.dataset.productId);
            addToCart(productId);
            hideProductDetailModal();
        });
    }

    // Search and Filter Listeners
    if (searchButton) searchButton.addEventListener('click', applyFilters);
    if (searchInput) searchInput.addEventListener('input', debounce(applyFilters, 300));
    if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
    if (sortFilter) sortFilter.addEventListener('change', applyFilters);

    // Contact Form Listener
    if (contactForm) contactForm.addEventListener('submit', handleContactForm);
});