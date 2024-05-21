import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex justify-center">
        <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 mr-4">Documentation</button>
        <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">Support</button>
      </div>
    </footer>
  );
}

export default Footer;
