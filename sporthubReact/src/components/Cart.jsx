import "../assets/styles/cart.css"

export default function Cart({ userLogged, cart, setCart }) {
	const removeOneFromCart = (productId) => {
		if (userLogged) {
			const newCart = [...cart];
			newCart.map((item) => {
				if (item.prod.id === productId) {
					item.quantity--;
				}
			});
			setCart(newCart.filter((item) => item.quantity != 0));
		}
	};

	const removeFromCart = (productId) => {
		if (userLogged) {
			setCart(cart.filter(item => item.prod.id !== productId));
		}
	};

	const addOneToCart = (productId) => {
		if (userLogged) {
			const newCart = [...cart];
			newCart.map((item) => {
				if (item.prod.id === productId) {
					item.quantity++;
				}
			});
			setCart(newCart);
		}
	};

	const cartInfo = (cart) => {
		let items = 0;
		let total = 0;
		cart.forEach((item) => {
			items += item.quantity;
			total += (item.quantity * item.prod.price);
		});
		return [items, total];
	};

	return (
		<div>
			<h1>Shopping Cart</h1>
			<br />
			{cart.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<div className="container">
					{cart.map((product) => {
						return (
							<div class="card mb-2">
								<div class="card-body text-center">
									<div className="row align-items-center">
										<div className="col-3">
											<img
												style={{ maxWidth: "30%", height: "auto" }}
												src={product.prod.photo}
												alt="photo"
											/>
										</div>
										<div className="col-3">
											<h5 class="card-title">{product.prod.name}</h5>
										</div>
										<div className="col-3">
											<button
												onClick={() => addOneToCart(product.prod.id)}
												className="addButton px-1"
											>
												<ion-icon name="add-circle-outline"></ion-icon>
											</button>

											<span className="px-1">Quantity: {product.quantity}</span>

											<button
												onClick={() => removeOneFromCart(product.prod.id)}
												className="removeButton px-1"
											>
												<ion-icon name="remove-circle-outline"></ion-icon>
											</button>

											<button
												onClick={() => removeFromCart(product.prod.id)}
												className="removeButton mx-1"
											>
												<ion-icon name="trash-bin-outline"></ion-icon>
											</button>
										</div>
										<div className="col-3">
											<p>Price: {product.prod.price}€</p>
											<h5>Subtotal: {product.prod.price * product.quantity}€</h5>
										</div>
									</div>
								</div>
							</div>
						);
					})}

					<div className="card">
						<div className="card-body text-center">
							<div className="row align-items-center">
								<div className="col-3"></div>
								<div className="col-3"></div>
								<div className="col-3">
									<h5>Total products: {cartInfo(cart)[0]}</h5>
								</div>
								<div className="col-3">
									<h4>Total: {cartInfo(cart)[1]}€</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}