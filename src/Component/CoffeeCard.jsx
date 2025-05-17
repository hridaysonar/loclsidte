import React from 'react';
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  if (!coffee) {
    console.warn("Coffee object is undefined:", coffee);
    return null;
  }

  const { _id, photo, name, chef, price } = coffee;

  const handleDelete = (id) => {
    if (!id) {
      console.warn("Invalid ID:", id);
      Swal.fire({
        title: "Error!",
        text: "Invalid coffee ID.",
        icon: "error",
      });
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffe-house-server-beige.vercel.app/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaining = coffees.filter((item) => item._id !== id);
              setCoffees(remaining);
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
            } else {
              throw new Error("Deletion unsuccessful");
            }
          })
          .catch((err) => {
            console.error("Error:", err);
            Swal.fire("Error!", `Something went wrong: ${err.message}`, "error");
          });
      }
    });
  };

  return (
    <div className="flex justify-center mt-10 px-4 sm:px-6 lg:px-8">
      <div className="card card-side bg-pink-100 shadow-sm px-6 py-4 items-center gap-4 w-full max-w-md sm:max-w-lg lg:max-w-xl">
        <figure className="w-1/3 sm:w-1/4 lg:w-1/5">
          <img
            src={photo || "https://via.placeholder.com/150"}
            alt={name}
            className="w-full h-auto object-contain"
          />
        </figure>

        <div className="flex flex-col sm:flex-row flex-1 justify-between items-center gap-4 sm:gap-2">
          <div className="text-center sm:text-left">
            <p><span className="font-semibold">Name:</span> {name}</p>
            <p><span className="font-semibold">Chef:</span> {chef}</p>
            <p><span className="font-semibold">Price:</span> {price}</p>
          </div>

          <div className="flex sm:flex-col gap-2">
            <Link to={`/coffeedetls/${_id}`}>
              <button className="btn btn-sm bg-[#b89268] text-white border-none">
                <FaEye />
              </button>
            </Link>

            <Link to={`/updatecoffee/${_id}`}>
              <button className="btn btn-sm bg-[#5a4b43] text-white border-none">
                <FaEdit />
              </button>
            </Link>

            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-sm bg-red-500 text-white border-none"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
