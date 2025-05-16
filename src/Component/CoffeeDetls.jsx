import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';

const CoffeeDetls = () => {
    const { id } = useParams();
    const [coffee, setCoffee] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3000/coffees/${id}`)
            .then(res => res.json())
            .then(data => {
                setCoffee(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch coffee:', err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="text-center mt-10">Loading...</div>;
    if (!coffee) return <div className="text-center mt-10 text-red-500">Coffee not found.</div>;

    const { photo, name, chef, supplier, taste, category, details } = coffee;

    return (
        <div className="min-h-screen bg-pink-50 px-8 py-6 font-sans">
            <Link to="/" className="text-sm text-gray-700 mb-4 inline-block hover:underline">
                ← Back to home
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white p-6 rounded shadow-md">
                {/* Image Section */}
                <div className="flex justify-center">
                    <img
                        src={photo || "https://via.placeholder.com/150"}
                        alt={name}
                        className="w-64 h-auto"
                    />
                </div>

                {/* Details Section */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Coffee Details</h2>
                    <ul className="space-y-2 text-gray-700">
                        <li><strong>Name:</strong> {name}</li>
                        <li><strong>Chef:</strong> {chef}</li>
                        <li><strong>Supplier:</strong> {supplier}</li>
                        <li><strong>Taste:</strong> {taste}</li>
                        <li><strong>Category:</strong> {category}</li>
                        <li><strong>Details:</strong> {details}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetls;
