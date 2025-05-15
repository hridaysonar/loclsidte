import React from 'react';
import bgimg from '../assets/images/more/3.png'
import icon1 from '../assets/images/icons/1.png'
import icon2 from '../assets/images/icons/2.png'
import icon3 from '../assets/images/icons/3.png'
import icon4 from '../assets/images/icons/4.png'
const Header = () => {
  return (
    <>
      {/* Hero Section with Stripe Overlay */}
      <div
        className="relative h-[70vh] bg-cover bg-center bg-no-repeat mt-5"
       style={{ backgroundImage: `url(${bgimg})` }}
      >
        {/* Stripe Overlay */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(to right, rgba(0,0,0,0.3) 0px, rgba(0,0,0,0.3) 20px, transparent 20px, transparent 40px)]"></div>

        {/* Dark Overlay with Content */}
        <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-lg px-4">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="mb-6">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back! Your
              companion of every moment. Enjoy the beautiful moments and make them memorable.
            </p>
            <button className="bg-[#b89268] hover:bg-[#8b4513] text-white py-2 px-6 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="bg-[#f5ebe0] py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              icon: icon1,
              title: 'Awesome Aroma',
              desc: 'A sensory experience like no other.',
            },
            {
              icon: icon2,
              title: 'High Quality',
              desc: 'The perfect blend for your satisfaction.',
            },
            {
              icon:icon3,
              title: 'Pure Grades',
              desc: 'Handpicked and carefully roasted beans.',
            },
            {
              icon: icon4,
              title: 'Proper Roasting',
              desc: 'Roasted to perfection for optimal flavor.',
            },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <img src={item.icon} alt={item.title} className="h-12 w-12 mx-auto mb-2" />
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
