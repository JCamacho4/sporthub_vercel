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
				<div className="container" id="buttons">
					<button id="cart" className="btn btn-primary" onClick={() => props.addToCart(product)}>Add to cart</button>
					<button id="wishlist" className="btn btn-primary" onClick={() => props.addToWishlist(product)}>Add to wishlist</button>
				</div>
			</div>
		) : null
	);
}
