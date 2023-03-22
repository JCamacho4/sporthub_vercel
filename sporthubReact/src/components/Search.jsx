//import "../assets/styles/search.css";

import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import "../assets/styles/search.css";

const filter = (list, category, query) => {
	let filteredList = [];

	list.forEach((product) => {
		if (category === "all" || product.category === category) {
			if (!query) {
				filteredList.push(product);
			} else if (product.name.includes(query)) {
				filteredList.push(product);
			}
		}
	});

	return filteredList;
};

const productList = [
	{
		name: "Brooks running shoes",
		category: "track",
		description: "Unused running shoes",
		photo: "https://www.brooksrunning.com/dw/image/v2/BGPF_PRD/on/demandware.static/-/Sites-brooks-master-catalog/default/dw13a6b6c1/original/110366/110366-435-l-adrenaline-gts-22-mens-cushion-running-shoe.jpg?sw=1388&sh=868&sm=cut&sfrm=png&bgcolor=F1F3F6",
		price: 50
	},
	{
		name: "Babolat tennis racket",
		category: "tennis",
		description: "Babolat tennis racket",
		photo: "https://cdn11.bigcommerce.com/s-65f1mln0/images/stencil/600x600/products/3401/16541/20Pure_Aero___77651.1618612938.png?c=2",
		price: 50
	},
	{
		name: "Wilson Basketball",
		category: "basketball",
		description: "",
		photo: "https://target.scene7.com/is/image/Target/GUEST_20affc7e-e0d7-4eb6-a6f3-68d13520f8be?wid=488&hei=488&fmt=pjpeg",
		price: 20
	},
	{
		name: "Nike Football Boots",
		category: "football",
		description: "",
		photo: "https://img.fruugo.com/product/0/10/238646100_max.jpg",
		price: 90
	},
	{
		name: "Swimming Suit",
		category: "swimming",
		description: "",
		photo: "https://www.sportsdirect.com/images/imgzoom/35/35346203_xxl.jpg",
		price: 30
	},
	{
		name: "Road Bike",
		category: "cycling",
		description: "",
		photo: "https://www.wigglestatic.com/product-media/100375136/Brand-X-Road-Bike-Road-Bikes-Black-2017-BRNDXROADXL-0.jpg",
		price: 200
	},
	{
		name: "Everlast Boxing Gloves",
		category: "boxing",
		description: "",
		photo: "https://www.sportsdirect.com/images/imgzoom/76/76233103_xxl.jpg",
		price: 55
	}
];

export default function Search({ }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const [filteredList, setFilteredList] = useState([]);
	const category = searchParams.get("c");
	const query = searchParams.get("q");
	const navigate = useNavigate();

	const openProduct = (product) => {
		console.log(product.name);
		// REMINDER
		// hacer el path con un id en vez de con nombre
		let path = "/product/" + product.name;
		navigate(path, { product: product });
	};

	useEffect(() => {
		setFilteredList(filter(productList, category, query));
	}, [category,query]);

	return (
		<div>
			<SearchBar />

			<h5 className="mb-3">Looking for {query !== null ? query : "products "} in {category}</h5>

			<div>
				{filteredList.map((product) => {
					return (
						<div onClick={() => openProduct(product)} className="card cardSearch" key={product.name}>
							<img className="card-img-top" src={product.photo} alt="photo" />
							<div className="card-body">
								<h5 className="card-title">{product.name}</h5>
								<p className="card-text">{product.description}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}