import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#f5ebe0] py-10 px-6 mt-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 ">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-[#6f4e37]">Espresso Emporium</h2>
          <p className="text-[#6f4e37]">Always happy to be your friend. Come & Contact with us to share your memorable moments & have with your best companion.</p>
          <div className="flex gap-4 text-[#6f4e37]">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
          <div className="text-[#6f4e37]">
            <p>📞 +880 174 8662 245</p>
            <p>📧 mdhridaysonar@gmail.com</p>
            <p>📍 22 Wall street, King Road, This is Natore 😎</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-[#6f4e37]">Connect With Us</h2>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Name" className="p-3 border border-[#d2b48c] rounded-lg" />
            <input type="email" placeholder="Email" className="p-3 border border-[#d2b48c] rounded-lg" />
            <textarea placeholder="Message" className="p-3 border border-[#d2b48c] rounded-lg"></textarea>
            <button className="bg-[#a0522d] text-white py-2 px-6 rounded-lg hover:bg-[#8b4513]">Send Message</button>
          </form>
        </div>
      </div>

      <div className="text-center text-[#6f4e37] mt-10">
        © 2025 Espresso Emporium. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;