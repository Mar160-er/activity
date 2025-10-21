import React, { useState } from "react";
import Cards from "./components/Cards";
import NavBar from "./components/NavBar";
import Form from "./Form";

const cars = [
	{
		id: 1,
		name: "Ford Mustang GT",
		image: "/images/4cdad4ff-5d25-4497-9879-aa2114ca76d1.jpg",
		price: "$45,000",
		range: "450 hp",
		description: "A modern American muscle car blending classic looks with modern performance.",
		stock: 3
	},
	{
		id: 2,
		name: "Chevrolet Camaro ZL1",
		image: "/images/4edc82fb-2a39-4168-ada2-6cfcc596f306.jpg",
		price: "$65,000",
		range: "650 hp",
		description: "A true track-ready muscle car with a supercharged V8 engine.",
		stock: 2
	},
	{
		id: 3,
		name: "Tesla Model S Plaid",
		image: "/images/10 Stunning McLaren P1 Color Combos that Blend….jpg",
		price: "$109,000",
		range: "1,020 hp (Electric)",
		description: "All-electric luxury sedan with record-breaking acceleration and technology.",
		stock: 4
	},
	{
		id: 4,
		name: "BMW M4 Competition",
		image: "/images/a0a54dcd-f53e-4e34-8bf0-64840dd33c5d.jpg",
		price: "$78,000",
		range: "503 hp",
		description: "High-performance coupe with precision handling and luxurious features.",
		stock: 3
	},
	{
		id: 5,
		name: "Audi R8 V10",
		image: "/images/a79acd4d-2d29-45a9-bbc0-b613faa0cb39.jpg",
		price: "$158,000",
		range: "562 hp",
		description: "Mid-engine supercar combining everyday comfort with thrilling performance.",
		stock: 2
	},
	{
		id: 6,
		name: "Mercedes-Benz AMG GT",
		image: "/images/a81f1b32-bb4c-4db2-9f94-18a2a42a6610.jpg",
		price: "$130,000",
		range: "523 hp",
		description: "A luxury grand tourer that merges style, comfort, and raw power.",
		stock: 1
	},
	{
		id: 7,
		name: "Toyota GR86",
		image: "/images/download.jpg",
		price: "$30,000",
		range: "228 hp",
		description: "Lightweight sports coupe offering agile handling and an affordable price tag.",
		stock: 5
	},
	{
		id: 8,
		name: "Mazda MX-5 Miata",
		image: "/images/McLaren P1 GTR Engine_ 3_8L V8 Twin-turbo Plug-In….jpg",
		price: "$28,000",
		range: "181 hp",
		description: "Compact roadster known for its fun-to-drive nature and reliability.",
		stock: 4
	},
	{
		id: 9,
		name: "Porsche Taycan Turbo S",
		image: "/images/porsche_taycan_turbo_s.jpg",
		price: "$185,000",
		range: "750 hp (Electric)",
		description: "Porsche’s electric sports car offering performance and sustainability.",
		stock: 2
	},
	{
		id: 10,
		name: "Hyundai Ioniq 5 N",
		image: "/images/hyundai_ioniq5_n.jpg",
		price: "$60,000",
		range: "641 hp (Electric)",
		description: "High-performance electric crossover with futuristic styling.",
		stock: 3
	},
	{
		id: 11,
		name: "Nissan Z Proto",
		image: "/images/nissan_z_proto.jpg",
		price: "$50,000",
		range: "400 hp",
		description: "The latest Z car, celebrating Nissan’s iconic sports car heritage.",
		stock: 3
	},
	{
		id: 12,
		name: "Aston Martin DB12",
		image: "/images/aston_martin_db12.jpg",
		price: "$245,000",
		range: "671 hp",
		description: "Luxury sports GT that combines British elegance with raw V8 power.",
		stock: 1
	}
];

const Listing = () => {
	const [search, setSearch] = useState("");
	const [orderCar, setOrderCar] = useState(null);
	const [orderSuccess, setOrderSuccess] = useState(false);
	const [showSuccessModal, setShowSuccessModal] = useState(false);

	const filteredCars = cars.filter(car =>
		car.name.toLowerCase().includes(search.toLowerCase()) ||
		car.description.toLowerCase().includes(search.toLowerCase()) ||
		car.range.toLowerCase().includes(search.toLowerCase())
	);

	const carsPerPage = 6;
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(filteredCars.length / carsPerPage);
	const paginatedCars = filteredCars.slice(
		(currentPage - 1) * carsPerPage,
		currentPage * carsPerPage
	);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	React.useEffect(() => {
		setCurrentPage(1);
	}, [search]);

	const handleOrder = (car) => {
		setOrderCar(car);
		setOrderSuccess(false);
	};

	const handleOrderSubmit = (orderData) => {
		setOrderCar(null);
		setOrderSuccess(true);
		setShowSuccessModal(true);
	
		setTimeout(() => {
			setShowSuccessModal(false);
		}, 2000);
	};

	const handleOrderCancel = () => {
		setOrderCar(null);
	};

	return (
		<div className="min-h-screen bg-purple-900 text-white flex flex-col">
			<NavBar />
			<div className="py-16 px-6 flex-1 container mx-auto">
				<div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
					<h1 className="text-3xl md:text-4xl font-bold">Available Cars</h1>
					<div className="flex items-center gap-3 w-full md:w-auto">
						<input
							type="text"
							placeholder="Search cars..."
							value={search}
							onChange={e => setSearch(e.target.value)}
							className="w-full md:w-72 px-4 py-2 rounded-lg bg-purple-800 text-white border border-purple-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
						/>
						<select value={"newest"} className="px-3 py-2 rounded-lg bg-purple-800 border border-purple-700 text-white">
							<option value="newest">Newest</option>
							<option value="price-low">Price: Low to High</option>
							<option value="price-high">Price: High to Low</option>
						</select>
					</div>
				</div>
				{showSuccessModal && (
					<div className="fixed inset-0 flex items-center justify-center z-50">
						<div className="bg-white rounded-lg shadow-lg px-10 py-8 text-2xl font-bold text-green-600">
							Order Complete!
						</div>
					</div>
				)}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{paginatedCars.length > 0 ? (
						paginatedCars.map(car => (
							<Cards
								key={car.id}
								name={car.name}
								image={car.image}
								price={car.price}
								range={car.range}
								description={car.description}
								stock={car.stock}
								onOrderClick={() => handleOrder(car)}
							/>
						))
					) : (
						<p className="text-gray-400 text-lg">No cars found.</p>
					)}
				</div>
				{totalPages > 1 && (
					<div className="flex justify-center mt-10 gap-2">
						{Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
							<button
								key={page}
								onClick={() => handlePageChange(page)}
								className={`px-4 py-2 rounded-full font-bold border transition ${
									page === currentPage
										? "bg-emerald-400 text-gray-900 border-emerald-400"
										: "bg-purple-800 text-white border-purple-700 hover:bg-emerald-300 hover:text-gray-900"
								}`}
							>
								{page}
							</button>
						))}
					</div>
				)}
			</div>
			{orderCar && (
				<Form car={orderCar} onSubmit={handleOrderSubmit} onCancel={handleOrderCancel} />
			)}
		</div>
	);
};

export default Listing;
