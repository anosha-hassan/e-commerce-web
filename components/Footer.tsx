import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-10">
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-3" size={24} />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">High Quality</h3>
              <p className="text-gray-600">Crafted from top materials</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-3" size={24} />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Warranty Protection</h3>
              <p className="text-gray-600">Over 2 years</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-3" size={24} />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Free Shipping</h3>
              <p className="text-gray-600">Order over $150</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-3" size={24} />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">24/7 Support</h3>
              <p className="text-gray-600">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 py-10">
        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Funiro.</h2>
          <p className="text-gray-600">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Links</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-800">Shop</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Help</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-800">Payment Options</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-800">Returns</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policies</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Newsletter</h3>
          <form className="flex flex-col">
            <input type="email" placeholder="Enter Your Email Address" className="p-2 mb-2 rounded bg-gray-200 text-gray-800" required />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">SUBSCRIBE</button>
          </form>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8 border-t border-gray-300 pt-4">
        <p className="text-gray-600">2023 Funiro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
