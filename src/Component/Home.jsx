import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';
import Header from'./Header'
import Bannar from './Bannar';

const Home = () => {
  const initialCoffees = useLoaderData() || [];
  const [coffees, setCoffees] = useState(initialCoffees);

  if (!coffees.length) {
    return <div className="text-center mt-10">No coffees available.</div>;
  }

  return (
    <div>
    {/* <Headder/> */}
    <Header/>
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard 
            key={coffee._id} 
            coffee={coffee} 
            coffees={coffees}
            setCoffees={setCoffees} 
          />
        ))}
      </div>
    </div>
    <Bannar/>
    </div>
  );
};

export default Home;
