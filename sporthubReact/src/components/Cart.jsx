import "../assets/styles/cart.css"

export default function Cart({ userLogged, cart, setCart }) {
	const removeOneFromCart = (productId) => {
		if (userLogged) {
			//const newCart = cart.filter((cartProduct) => cartProduct.id !== productId);
			const newCart = [...cart];
			newCart.map((item) => {
				if (item.prod.id === productId) {
					item.quantity--;
				}
			});
			setCart(newCart.filter((item) => item.quantity != 0));
			console.log(newCart);
		}
	};

	const addOneToCart = (productId) => {
		const newCart = [...cart];
		newCart.map((item) => {
			if (item.prod.id === productId) {
				item.quantity++;
			}
		});
		setCart(newCart);
		console.log(newCart);
	};

	return (
		<div>
			<h1>Shopping Cart</h1>
			<br />
			{cart.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<div className="container">
					<div className="row">
						{cart.map((product) => {
							return (
								<div class="col-md-4">
									<div class="card">
										<div class="card-body text-center">
											<div
												className="cart-product-div"
												key={product.prod.id}
											>
												<h5 class="card-title">{product.prod.name}</h5>
												<img
													style={{ maxWidth: "30%", height: "auto" }}
													src={product.prod.photo}
													alt="photo"
												/>
												<p>Price: {product.prod.price}€</p>
												<button
													onClick={() => addOneToCart(product.prod.id)}
													className="addButton"
												>
													<ion-icon name="add-circle-outline"></ion-icon>
												</button>

												<span className="px-2">Quantity: {product.quantity}</span>

												<button
													onClick={() => removeOneFromCart(product.prod.id)}
													className="removeButton"
												>
													<ion-icon name="remove-circle-outline"></ion-icon>
												</button>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}