import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/styles/product.css";

export default function Product(props) {
	const [product, setProduct] = useState();

	let params = useParams();
	let productId = params.productId;
	let productList = props.productList;

	useEffect(() => {
		productList.forEach((product) => {
			console.log(productId, product.id)
			if (product.id == productId) {
				setProduct(product);
			}
		});
	}, []);

	return (
		product !== undefined ? (
			<div className="product-div">
				<h1>{product.name}</h1>
				<img style={{ maxWidth: '30%', height: 'auto' }} src={product.photo} alt="photo" />
				<p>{product.description}</p>
			</div>
		) : null
	);
}
