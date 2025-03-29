
document.addEventListener('DOMContentLoaded', function() {
  const products = [
    {
      id: 1,
      name: "Supernova",
      description: "Our pocket-sized yellow storage box to store and carry your patches wherever life takes you!",
      price: 999,
      badge: "Bestseller",
      color: "bg-primary",
      special: true,
      path: "/super-nova-box.html"
    },
    {
      id: 2,
      name: "B12 Boost",
      description: "A vitamin-infused refill patch that keeps you energized all day long",
      price: 1199,
      badge: "New",
      color: "bg-[#9B7EDD]",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
      special: false,
      path: "/products.html"
    },
    {
      id: 3,
      name: "Dream Catcher",
      description: "Fall asleep faster and sleep deeper with our melatonin-infused refill patches",
      price: 1299,
      badge: null,
      color: "bg-secondary",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
      special: false,
      path: "/products.html"
    },
    {
      id: 4,
      name: "Caffeine Kick",
      description: "Your coffee alternative refill patch - clean energy without the jitters or crashes",
      price: 1199,
      badge: "Popular",
      color: "bg-accent",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>',
      special: false,
      path: "/products.html"
    },
    {
      id: 5,
      name: "Focus Formula",
      description: "Stay concentrated and enhance mental clarity with our nootropic refill patches",
      price: 1399,
      badge: "New",
      color: "bg-[#64B5F6]",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 16.98h-6m-6 0H2m16 0a4 4 0 1 0 0-8H2m10-6v16"/></svg>',
      special: false,
      path: "/products.html"
    },
    {
      id: 6,
      name: "Pre-Workout Power",
      description: "Get pumped for your workout with our energy-boosting fitness refill patches",
      price: 1499,
      badge: "For Athletes",
      color: "bg-[#FF5252]",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4v16"></path><path d="M18 4v16"></path><path d="M6 12h12"></path></svg>',
      special: false,
      path: "/products.html"
    },
    {
      id: 7,
      name: "Chill Pill",
      description: "De-stress and find your calm with our anxiety-reducing refill patches",
      price: 1299,
      badge: null,
      color: "bg-[#81C784]",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>',
      special: false,
      path: "/products.html"
    }
  ];

  const productsGrid = document.getElementById('products-grid');
  
  products.forEach(product => {
    const productCard = document.createElement('div');
    
    // Set class based on whether it's a special product or not
    productCard.className = `overflow-hidden group hover:shadow-lg transition-all duration-300 border-4 cursor-pointer ${product.special ? 'border-primary col-span-1 sm:col-span-2 lg:col-span-2 row-span-2' : 'border-transparent'}`;
    
    productCard.innerHTML = `
      <div class="${product.special ? 'aspect-square sm:aspect-auto sm:h-80' : 'aspect-square'} relative overflow-hidden">
        <div class="absolute inset-0 ${product.color} ${product.special ? 'opacity-100' : 'opacity-70'} group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          ${product.special ? `
            <div class="text-center relative">
              <img 
                src="/lovable-uploads/1cceb897-3cf7-4446-8da8-c25b795d4935.png" 
                alt="Supernova" 
                class="h-48 mx-auto mb-6 object-contain"
              />
              <h2 class="text-4xl font-extrabold text-black wiggle">SUPERNOVA</h2>
              <p class="text-black font-bold">Pocket-Sized Patch Carrier</p>
            </div>
          ` : `
            <div class="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold float">
              ${product.icon}
            </div>
          `}
        </div>
        ${product.badge ? `
          <div class="absolute top-4 right-4 ${product.special ? 'bg-black text-white' : 'bg-white text-primary'} px-2 py-1 rounded-full text-xs font-semibold">
            ${product.badge}
          </div>
        ` : ''}
      </div>
      <div class="p-6 bg-white">
        <h3 class="text-xl font-bold mb-2">${product.name}</h3>
        <p class="text-gray-600 text-sm mb-4">${product.description}</p>
        <div class="flex items-center justify-between">
          <span class="font-bold flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-1">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            ${product.price}
          </span>
          <button 
            class="rounded-full py-1 px-3 text-sm ${product.special ? 'bg-black text-white hover:bg-gray-800' : 'bg-primary text-black hover:bg-primary/90'} add-to-cart-btn"
            data-product-id="${product.id}"
            data-product-name="${product.name}"
            data-product-price="${product.price}"
          >
            Add to Cart
          </button>
        </div>
      </div>
    `;
    
    // Add click event to card
    productCard.addEventListener('click', function(e) {
      // Don't navigate if clicking the add to cart button
      if (!e.target.classList.contains('add-to-cart-btn')) {
        window.location.href = product.path;
      }
    });
    
    productsGrid.appendChild(productCard);
  });
  
  // Add event listeners to Add to Cart buttons
  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent card click
      
      const productId = parseInt(this.getAttribute('data-product-id'));
      const productName = this.getAttribute('data-product-name');
      const productPrice = parseInt(this.getAttribute('data-product-price'));
      
      window.cart.addToCart({
        id: productId,
        name: productName,
        price: productPrice
      });
    });
  });
});
