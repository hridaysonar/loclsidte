import React from 'react';
import img from'../assets/images/more/logo1.png'
const Navebar = () => {
  return (
    <div className="bg-[#b99e99] py-4 px-6 mt-5">
      <div className="max-w-5xl mx-auto flex justify-center items-center">
        <div className="flex items-center gap-2">
          <img src={img} alt="Espresso Emporium Logo" className="h-6 w-6" />
          <span className="text-white font-bold text-lg">Espresso Emporium</span>
        </div>
      </div>
    </div>
  );
};

export default Navebar;
