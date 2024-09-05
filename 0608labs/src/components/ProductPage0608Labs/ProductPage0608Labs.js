import React from 'react';
import { Home, Phone, Package, Twitter, Instagram, GitBranch } from 'lucide-react';

const ProductPage0608Labs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-black text-white">
      <header className="p-4 bg-black bg-opacity-50 flex justify-between items-center">
        <div className="text-2xl font-bold">0608labs</div>
        <nav>
          <button className="mx-2 p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all">
            <Home className="w-6 h-6" />
          </button>
          <button className="mx-2 p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all">
            <Phone className="w-6 h-6" />
          </button>
          <button className="mx-2 p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all">
            <Package className="w-6 h-6" />
          </button>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="h-screen flex items-center justify-center p-4">
          <h1 className="text-6xl font-bold text-center leading-tight" style={{fontSize: 'calc(2vw + 2rem)'}}>
            Welcome to 0608labs
            <p className="text-xl mt-4 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </h1>
        </section>

        <section className="py-16 px-4">
          <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
            <div className="flex-1 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold mb-4">Product One</h2>
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
              </p>
            </div>
            <div className="flex-1 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold mb-4">Product Two</h2>
              <p className="text-xl">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-br from-gray-800 to-gray-900 rounded-full"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold mb-8">Announcements</h2>
              <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-xl">
                <img src="/api/placeholder/400/300" alt="Announcement" className="mx-auto mb-4 rounded" />
                <p className="text-xl">
                  Stay tuned for exciting updates and new product releases!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black bg-opacity-50 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src="/api/placeholder/150/50" alt="0608labs Logo" className="h-12" />
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Company</h3>
              <div className="flex gap-4">
                <Twitter className="w-6 h-6 cursor-pointer" />
                <Instagram className="w-6 h-6 cursor-pointer" />
                <GitBranch className="w-6 h-6 cursor-pointer" /> 
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Legal</h3>
              <ul>
                <li><a href="#" className="hover:underline">Terms</a></li>
                <li><a href="#" className="hover:underline">Privacy</a></li>
                <li><a href="#" className="hover:underline">Refunds</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductPage0608Labs;