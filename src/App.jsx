import React, { useState, useEffect } from 'react';
import mongoImage from '../public/images/mangoPickle.jpg'
import mangoImage2 from '../public/images/mangopickle2.jpg'
const MangoPickleWebsite = () => {
  const [isWaterVisible, setIsWaterVisible] = useState(false);
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    // Show water droplet animation when page loads
    setIsWaterVisible(true);
    const timer = setTimeout(() => {
      setIsWaterVisible(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-amber-50">
      {/* Water Animation */}
      {isWaterVisible && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
          <div className="absolute bg-blue-400 bg-opacity-30 rounded-full w-64 h-64 animate-ping"></div>
          <div className="absolute bg-blue-300 bg-opacity-50 rounded-full w-48 h-48 animate-pulse"></div>
        </div>
      )}
      
      {/* Header/Navigation */}
      <header className="bg-green-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex flex-wrap items-center justify-between">
            <div className="text-3xl font-bold cursive tracking-wide">MangoPikl</div>
            <div className="hidden md:flex space-x-8 text-lg">
              <a href="#" className="hover:text-yellow-300 transition">Home</a>
              <a href="#" className="hover:text-yellow-300 transition">Shop</a>
              <a href="#" className="hover:text-yellow-300 transition">Blog</a>
              <a href="#" className="hover:text-yellow-300 transition">About</a>
              <a href="#" className="hover:text-yellow-300 transition">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <span className="absolute -top-2 -right-2 bg-yellow-500 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
          </nav>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-green-700 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Traditional Mango Pickle</h1>
            <p className="text-xl mb-6">Handcrafted with love, using only the finest green mangoes</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold px-6 py-3 rounded-lg shadow-lg transition transform hover:scale-105">
              Shop Now
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-4 rounded-full shadow-2xl">
              <div className="rounded-full overflow-hidden w-64 h-64 border-8 border-yellow-300">
                <img src={mongoImage} alt="Green Mango Pickle" className="w-full h-full object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Our Signature Pickles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { id: 1, name: "Traditional Mango Pickle", price: "₹249", image: mongoImage },
            { id: 2, name: "Spicy Green Mango Delight", price: "₹299", image: mangoImage2 },
            { id: 3, name: "Sweet & Tangy Mango Relish", price: "₹279", image: mongoImage }
          ].map(product => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">Handmade with organic green mangoes and premium spices</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-700">{product.price}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Free Delivery Banner */}
      <section className="bg-yellow-500 py-8 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900">Free Delivery All Across India!</h2>
          <p className="text-green-800 mt-2">Order now and receive your pickle at your doorstep with no delivery charges</p>
        </div>
      </section>
      
      {/* Blog Section */}
      <section className="py-16 container mx-auto px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Pickle Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-amber-50 rounded-lg overflow-hidden shadow-md">
            <img src={mongoImage} alt="Blog Post" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-800 mb-2">The Art of Mango Pickle Making</h3>
              <p className="text-gray-700 mb-4">Discover the traditional techniques that make our pickle special and how we preserve the authentic flavors...</p>
              <a href="#" className="text-green-600 hover:text-green-800 font-medium">Read More →</a>
            </div>
          </div>
          <div className="bg-amber-50 rounded-lg overflow-hidden shadow-md">
            <img src={mangoImage2} alt="Blog Post" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-800 mb-2">Health Benefits of Raw Mango</h3>
              <p className="text-gray-700 mb-4">Green mangoes are packed with nutrients and have been used in traditional medicine for centuries. Learn about the health advantages...</p>
              <a href="#" className="text-green-600 hover:text-green-800 font-medium">Read More →</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">How We Make Our Pickle</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: 1, title: "Select", desc: "Only the finest green mangoes are handpicked" },
            { step: 2, title: "Prepare", desc: "Cut and seasoned with traditional spices" },
            { step: 3, title: "Ferment", desc: "Natural fermentation for authentic flavor" },
            { step: 4, title: "Package", desc: "Sealed fresh for maximum taste and shelf life" }
          ].map(item => (
            <div key={item.step} className="text-center">
              <div className="w-24 h-24 rounded-full bg-green-600 flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Priya S.", quote: "The authentic taste reminds me of my grandmother's pickle. Absolutely delicious!" },
              { name: "Rajesh K.", quote: "Best mango pickle I've ever had. The texture and flavor are perfect." },
              { name: "Anita M.", quote: "Love that it's delivered for free across India. Great service and amazing product!" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                <div className="text-yellow-500 text-4xl mb-4">"</div>
                <p className="mb-4">{testimonial.quote}</p>
                <p className="font-bold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-green-900 text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MangoPikl</h3>
              <p>Bringing the authentic taste of homemade mango pickle to your table.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-300">Home</a></li>
                <li><a href="#" className="hover:text-yellow-300">Shop</a></li>
                <li><a href="#" className="hover:text-yellow-300">Blog</a></li>
                <li><a href="#" className="hover:text-yellow-300">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>Email: info@mangopikl.com</li>
                <li>Phone: +91 90613 06799</li>
                <li>Address: Malappuram , Kerala</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="mb-4">Subscribe for recipes and special offers</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 w-full rounded-l text-gray-800" />
                <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-r">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-6 text-center">
            <p>&copy; 2025 MangoPikl. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MangoPickleWebsite;