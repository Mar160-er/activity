import React, { useState } from "react";

const Form = ({ car, onSubmit, onCancel }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [quantity, setQuantity] = useState(1);

	if (!car) return null;

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({ carId: car.id, name, email, quantity });
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center z-50">
			<div className="bg-purple-800 text-white rounded-lg p-6 w-full max-w-md">
				<h3 className="text-2xl font-bold mb-4">Order {car.name}</h3>
				<form onSubmit={handleSubmit}>
					<label className="block mb-2">
						<span className="text-sm text-gray-300">Your name</span>
						<input value={name} onChange={e => setName(e.target.value)} className="w-full mt-1 p-2 rounded bg-gray-700" required />
					</label>
					<label className="block mb-2">
						<span className="text-sm text-gray-300">Email</span>
						<input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full mt-1 p-2 rounded bg-gray-700" required />
					</label>
					<label className="block mb-4">
						<span className="text-sm text-gray-300">Quantity</span>
						<input type="number" value={quantity} min={1} onChange={e => setQuantity(Number(e.target.value))} className="w-full mt-1 p-2 rounded bg-gray-700" />
					</label>
					<div className="flex gap-2 justify-end">
						<button type="button" onClick={onCancel} className="px-4 py-2 rounded bg-purple-700">Cancel</button>
						<button type="submit" className="px-4 py-2 rounded bg-emerald-400 text-gray-900 font-bold">Submit Order</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Form;
