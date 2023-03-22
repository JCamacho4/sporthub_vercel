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


export default function Search({ productList }) {
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