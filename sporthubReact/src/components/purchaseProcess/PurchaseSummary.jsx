import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";

export default function PurchaseSummary({ userLogged, cart, setCart, selectedAddress, shipment }) {
	const navigate = useNavigate();
	const [oldCart, setOldCart] = useState(cart);

	useEffect(() => {
		if (userLogged == null) {
			navigate("/login");
		} else if (cart == undefined || cart.length == 0) {
			alert("Shopping cart is empty");
			navigate("/")
		} else {
			setCart([]);
		}
	}, []);

	return (
		<div className="container">
			<h3>Thank you for your purchase!</h3>
			<h5>You will receive it on: {shipment.date}</h5>
			<div className="row">
					<div className="col project-section">
					<h3 className="section-input"> Selected Address</h3>

						<div className="input-field">
							<strong>Address Line-1</strong> {selectedAddress.address.address1}
						</div>

						<div className="input-field">
							<strong>Address Line-2</strong> {selectedAddress.address.address2}
						</div>

						<div className="input-field col-sm-5">
							<strong>Country</strong> {selectedAddress.address.country}
						</div>

						<div className="input-field col-sm-3">
							<strong>Postal-Code</strong> {selectedAddress.address.postalcode}
						</div>
				</div>
				<ProductList cart={oldCart} shipment={shipment} />
			</div>
			<button className="purchaseButton longButton" onClick={() => navigate("/")}>Back to main page</button>
		</div>
	);
}