import React from "react";
import Listing from "./Listing";
import NavBar from "./components/NavBar";

const LandingPage = () => {
	return (
 		<div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-purple-600 text-white flex flex-col">
			<header className="w-full">
				<NavBar />
				<div className="container mx-auto px-6 py-20">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
						<div>
							<h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">Drive the Future with <span className="text-emerald-400">Ma.Flor Automotive</span></h1>
							<p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl">Innovative. Reliable. Beautifully engineered. Discover our latest models and experience the next generation of driving tailored to performance and comfort.</p>
							<div className="flex gap-4">
								<a href="/listing" className="inline-block bg-emerald-400 hover:bg-emerald-300 text-gray-900 font-bold px-6 py-3 rounded-full shadow-lg transition">View Inventory</a>
								<a href="#about" className="inline-block border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 px-6 py-3 rounded-full transition">Learn More</a>
							</div>
						</div>
						<div className="flex justify-center">
							<div className="w-full max-w-md bg-purple-800 rounded-xl p-4 shadow-2xl">
								<img src="/images/hero-car.jpg" alt="Hero car" className="w-full h-56 object-cover rounded-md" />
								<div className="mt-4 text-center">
									<p className="text-gray-200">Experience modern design and thrilling performance</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<section id="about" className="py-16 bg-purple-800">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-bold text-center mb-8">Why choose Ma.Flor Automotive</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="bg-purple-700 p-6 rounded-lg text-center">
							<h3 className="text-xl font-semibold mb-2">Cutting-edge Technology</h3>
							<p className="text-gray-200">Advanced powertrains and smart features to keep you safe and connected.</p>
						</div>
						<div className="bg-purple-700 p-6 rounded-lg text-center">
							<h3 className="text-xl font-semibold mb-2">Sustainable Performance</h3>
							<p className="text-gray-200">Eco-friendly options without sacrificing driving excitement.</p>
						</div>
						<div className="bg-purple-700 p-6 rounded-lg text-center">
							<h3 className="text-xl font-semibold mb-2">Premium Support</h3>
							<p className="text-gray-200">White-glove service and nationwide support network.</p>
						</div>
					</div>
				</div>
			</section>
			<footer id="contact" className="bg-purple-900 py-10 text-center mt-auto">
				<h2 className="text-2xl font-bold mb-2">Contact Us</h2>
				<p className="mb-2">Email: info@maflorautomotive.com | Phone: (123) 456-7890</p>
				<p className="text-gray-400">&copy; {new Date().getFullYear()} Ma.Flor Automotive. All rights reserved.</p>
			</footer>
		</div>
	);
};

export default LandingPage;