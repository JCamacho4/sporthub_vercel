import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";

export default function PaymentSelection({ userLogged, cart, shipment, avanzar, retroceder }) {
	const navigate = useNavigate();
	const [creditCard, setCreditCard] = useState({});

	useEffect(() => {
		if (userLogged == null) {
			navigate("/login");
		} else if (cart == undefined || cart.length == 0) {
			alert("Shopping cart is empty");
			navigate("/")
		}
	}, []);

	const isUncompleted = () => {
		return creditCard.name == undefined || creditCard.number == undefined || creditCard.expirationDate == undefined ||
			creditCard.name == "" || creditCard.number == "" || creditCard.expirationDate == "";
	};

	return (
		<div className="container">
			<h3>Payment Selection</h3>

			<div className="row">
				<div className="col project-section">
					<h5 className="section-input">Credit Card</h5>

					<div className="input-field">
						<label htmlFor="name">Credit Card Name</label>
						<input type="text" className="form-control input-formulario" name="Locality"
							onChange={(e) => setCreditCard({ ...creditCard, name: e.target.value })} />
					</div>

					<div className="input-field">
						<label htmlFor="number">Credit Card Number</label>
						<input type="text" className="form-control input-formulario" name="number"
							onChange={(e) => setCreditCard({ ...creditCard, number: e.target.value })} />

					</div>

					<div className="input-field col-sm-2">
						<label htmlFor="expirationDate">Expiration Date</label>
						<input type="month" className="form-control input-formulario" name="expirationDate"
							onChange={(e) => setCreditCard({ ...creditCard, expirationDate: e.target.value })} />
					</div>
				</div>
				<ProductList cart={cart} shipment={shipment} />
			</div>
			<button onClick={() => retroceder()} className="purchaseButton">Back</button>
			<button onClick={() => avanzar()} disabled={isUncompleted()}
							className={"purchaseButton " + (isUncompleted() ? "disabledPurchaseButton" : "")}>Continue</button>
		</div>
	);
}