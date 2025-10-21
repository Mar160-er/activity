import React from "react";

const PrimaryButton = ({ children, onClick, className = "", type = "button" }) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`bg-emerald-400 hover:bg-emerald-300 text-gray-900 font-bold px-4 py-2 rounded-full transition ${className}`} 
		>
			{children}
		</button>
	);
};

export default PrimaryButton;