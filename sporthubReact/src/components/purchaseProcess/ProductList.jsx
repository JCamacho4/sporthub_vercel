export default function ProductList({ cart, shipment }) {

	const cartInfo = (cart, shipment) => {
		let items = 0;
		let total = 0;
		cart.forEach((item) => {
			items += item.quantity;
			total += (item.quantity * item.prod.price);
		});
		total += shipment.price;
		return [items, total];
	};

	return (
		<div className="col-4 project-section">
			<h5 className="section-input">Purchase Summary</h5>
			{cart.map((product) => {
				return (
					<div className="row align-items-center mb-2">
						<div className="col">
							<img src={product.prod.photo} style={{ width: "60%" }}></img>
						</div>
						<div className="col">
							x{product.quantity}
						</div>
						<div className="col">
							{product.quantity * product.prod.price}$
						</div>
					</div>
				);
			})}
			<div className="row align-items-center mb-2">
				<div className="col-8">
					Shipment
				</div>
				<div className="col">
					{shipment.price}$
				</div>
			</div>
			<div className="row align-items-center">
				<div className="col">
					TOTAL
				</div>
				<div className="col">
					x{cartInfo(cart, shipment)[0]}
				</div>
				<div className="col">
					{cartInfo(cart, shipment)[1]}$
				</div>
			</div>
		</div>
	);
}