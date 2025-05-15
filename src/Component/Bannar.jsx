import React from 'react';

import img1 from '../assets/images/cups/Rectangle 9.png'
import img2 from '../assets/images/cups/Rectangle 10.png'
import img3 from '../assets/images/cups/Rectangle 11.png'
import img4 from '../assets/images/cups/Rectangle 12.png'
import img5 from '../assets/images/cups/Rectangle 13.png'
import img6 from '../assets/images/cups/Rectangle 14.png'
import img7 from '../assets/images/cups/Rectangle 15.png'
import img8 from '../assets/images/cups/Rectangle 16.png'



const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Bannar = () => {
  return (
    <div className="bg-pink-100 py-10 px-4">
      <h2 className="text-center text-sm text-gray-600 mb-1">Follow Us Now</h2>
      <h1 className="text-center text-2xl font-semibold text-brown-800 mb-8">
        Follow on Instagram
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={src}
              alt={`Coffee ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bannar;