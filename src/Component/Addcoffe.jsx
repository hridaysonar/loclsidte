import React from 'react';
import Swal from 'sweetalert2';
import AdminLogin from './AdminLogin';

const AddCoffee = () => {
    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const coffeeData = Object.fromEntries(formData.entries());
        console.log("Form Data:", coffeeData);

        fetch('https://coffe-house-server-beige.vercel.app/coffees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(coffeeData),
        })
        .then(res => res.json())
        .then(data => {
            console.log('Response:', data);
            if (data.insertedId) {
                console.log('Added successfully');
                Swal.fire({
                    title: 'Coffee Added!',
                    text: 'The new coffee has been added successfully.',
                    icon: 'success',
                    imageUrl: 'https://placeholder.pics/svg/300x300',
                    imageHeight: 300,
                    imageAlt: 'Coffee Image',
                });
                form.reset(); // Reset form after successful submission
            }
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                title: "Error!",
                text: "Failed to add coffee. Please try again.",
                icon: "error",
                draggable: true,
            });
        });
    };

    const isAdmin = localStorage.getItem("isAdmin");
    console.log("Admin Status:", isAdmin);

    if (!isAdmin) {
        return <AdminLogin />;
    }

    return (
        <div className="bg-[#f5ebe0] min-h-screen flex flex-col items-center py-10">
            <div className="bg-[#fff8f3] w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 p-10 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold text-[#6f4e37] mb-6 text-center">Add New Coffee</h1>
                <form onSubmit={handleAddCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                        name="name" 
                        className="border border-[#d2b48c] p-3 rounded-lg" 
                        type="text" 
                        placeholder="Name" 
                        required 
                    />
                    <input 
                        name="chef" 
                        className="border border-[#d2b48c] p-3 rounded-lg" 
                        type="text" 
                        placeholder="Chef" 
                        required 
                    />
                    <input 
                        name="supplier" 
                        className="border border-[#d2b48c] p-3 rounded-lg" 
                        type="text" 
                        placeholder="Supplier" 
                        required 
                    />
                    <input 
                        name="taste" 
                        className="border border-[#d2b48c] p-3 rounded-lg" 
                        type="text" 
                        placeholder="Taste" 
                        required 
                    />
                    <input 
                        name="category" 
                        className="border border-[#d2b48c] p-3 rounded-lg" 
                        type="text" 
                        placeholder="Category" 
                        required 
                    />
                    <input 
                        name="details" 
                        className="border border-[#d2b48c] p-3 rounded-lg" 
                        type="text" 
                        placeholder="Details" 
                    />
                    <div className="md:col-span-2">
                        <input 
                            name="level" 
                            className="border border-[#d2b48c] p-3 rounded-lg w-full" 
                            type="text" 
                            placeholder="Level" 
                        />
                    </div>
                    <div className="md:col-span-2">
                        <input 
                            name="price" 
                            className="border border-[#d2b48c] p-3 rounded-lg w-full" 
                            type="number" 
                            step="0.01" 
                            placeholder="Price" 
                            required 
                        />
                    </div>
                    <input 
                        name="photo" 
                        className="border border-[#d2b48c] p-3 rounded-lg md:col-span-2" 
                        type="text" 
                        placeholder="Photo URL" 
                        required 
                    />

                    <div className="mt-8 flex justify-center md:col-span-2">
                        <button 
                            type="submit" 
                            className="bg-[#a0522d] text-white py-2 px-6 rounded-lg hover:bg-[#8b4513] cursor-pointer"
                        >
                            Add Coffee
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;
