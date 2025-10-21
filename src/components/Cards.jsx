import React from "react";
import PrimaryButton from "./PrimaryButton";

const Cards = ({ name, image, price, range, description, stock, onOrderClick }) => {
	return (
		<div className="bg-purple-800 rounded-xl shadow-lg w-full sm:w-80 p-6 flex flex-col items-center transform transition-transform hover:-translate-y-2 hover:shadow-2xl">
			<img src={image} alt={name} className="w-full h-48 object-cover rounded-lg mb-4" />
			<h2 className="text-2xl font-semibold mb-2">{name}</h2>
			<div className="flex items-center gap-3 mb-2">
				<span className="text-emerald-400 font-bold text-lg">{price}</span>
				<span className="ml-auto text-sm px-2 py-1 bg-purple-700 rounded-full text-gray-200">Stock: {stock}</span>
			</div>
			<p className="mb-2 text-sm text-gray-300">Range: <span className="font-semibold text-gray-200">{range}</span></p>
			<p className="text-center text-gray-300 mb-4">{description}</p>
			<div className="flex gap-3 w-full mt-4">
				<button className="flex-1 bg-emerald-400 text-gray-900 font-bold px-4 py-2 rounded-full hover:bg-emerald-300 transition">View Details</button>
				<PrimaryButton className="flex-1" onClick={onOrderClick}>Order</PrimaryButton>
			</div>
		</div>
	);
};

export default Cards;