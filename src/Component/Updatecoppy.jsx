import React from 'react';
import { useLoaderData } from 'react-router'; // 
// Updated import
import { IoMdArrowRoundBack } from "react-icons/io";
import Swal from 'sweetalert2';
import { NavLink } from 'react-router';

const Updatecoppy = () => {
  const coffee = useLoaderData();

  if (!coffee) {
    return <div className="text-center mt-10">Loading coffee data...</div>;
  }

  const { _id, name, photo, chef, supplier, taste, category, details, level, price } = coffee;

  const handleUpdateCoffee = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateCoffeeData = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`http://localhost:3000/coffees/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateCoffeeData),
      });

      const data = await response.json();
      console.log("Update Response:", data);

      if (response.ok && data.modifiedCount > 0) {
        Swal.fire("Success", "Coffee updated successfully!", "success");
      } else {
        Swal.fire("Info", "No changes were made.", "info");
      }
    } catch (error) {
      console.error("Error updating coffee:", error);
      Swal.fire("Error", "Failed to update coffee data.", "error");
    }
  };

  return (
    <div>
        <div  className=' text-center mx-auto' > <NavLink to={'/'}><button className='btn  mx-auto   '><IoMdArrowRoundBack /></button></NavLink> </div>
    <div className="bg-[#f5ebe0] min-h-screen flex flex-col items-center py-10">
      <div className="bg-[#fff8f3] w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 p-10 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-[#6f4e37] mb-6 text-center">Update Coffee</h1>
        <form onSubmit={handleUpdateCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input name="name" className="border border-[#d2b48c] p-3 rounded-lg" type="text" placeholder="Name" defaultValue={name} />
          <input name="chef" className="border border-[#d2b48c] p-3 rounded-lg" type="text" placeholder="Chef" defaultValue={chef} />
          <input name="supplier" className="border border-[#d2b48c] p-3 rounded-lg" type="text" placeholder="Supplier" defaultValue={supplier} />
          <input name="taste" className="border border-[#d2b48c] p-3 rounded-lg" type="text" placeholder="Taste" defaultValue={taste} />
          <input name="category" className="border border-[#d2b48c] p-3 rounded-lg" type="text" placeholder="Category" defaultValue={category} />
          <input name="details" className="border border-[#d2b48c] p-3 rounded-lg" type="text" placeholder="Details" defaultValue={details} />
          <div className="md:col-span-2">
            <input name="level" className="border border-[#d2b48c] p-3 rounded-lg w-full" type="text" placeholder="Level" defaultValue={level} />
          </div>
          <div className="md:col-span-2">
            <input name="price" className="border border-[#d2b48c] p-3 rounded-lg w-full" type="number" step="0.01" placeholder="Price" defaultValue={price} />
          </div>
          <input name="photo" className="border border-[#d2b48c] p-3 rounded-lg md:col-span-2" type="text" placeholder="Photo URL" defaultValue={photo} />

          <div className="mt-8 flex justify-center md:col-span-2">
            <button type="submit" className="bg-[#a0522d] text-white py-2 px-6 rounded-lg hover:bg-[#8b4513] cursor-pointer">
              Update Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Updatecoppy;
