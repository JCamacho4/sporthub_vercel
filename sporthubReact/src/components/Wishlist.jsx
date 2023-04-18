import "../assets/styles/cart.css"

export default function Wishlist({ userLogged, wishlist, setWishlist }) {

	const removeOneFromWishlist = (productId) => {
		if (userLogged) {
			const newWishlist = [...wishlist];
			newWishlist.map((item) => {
				if (item.prod.id === productId) {
					item.quantity--;
				}
			});
			setWishlist(newWishlist.filter((item) => item.quantity != 0));
		}
	};

	const removeFromWishlist = (productId) => {
		if (userLogged) {
			setWishlist(wishlist.filter(item => item.prod.id !== productId));
		}
	};

	const addOneToWishlist = (productId) => {
		if (userLogged) {
			const newWishlist = [...wishlist];
			newWishlist.map((item) => {
				if (item.prod.id === productId) {
					item.quantity++;
				}
			});
			setWishlist(newWishlist);
		}
	};

	const wishlistInfo = (wishlist) => {
		let items = 0;
		let total = 0;
		wishlist.forEach((item) => {
			items += item.quantity;
			total += (item.quantity * item.prod.price);
		});
		return [items, total];
	};

	return (
		<div>
			{console.log(wishlist)}
			<h1>WishList</h1>
			<br />
			{wishlist.length === 0 ? (
				<p>Your wishlist is empty.</p>
			) : (
				<div className="container">
					{wishlist.map((product) => {
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
												onClick={() => removeOneFromWishlist(product.prod.id)}
												className="removeButton px-1"
											>
												<ion-icon name="remove-circle-outline"></ion-icon>
											</button>

											<span className="px-1">Quantity: {product.quantity}</span>

											<button
												onClick={() => addOneToWishlist(product.prod.id)}
												className="addButton px-1"
											>
												<ion-icon name="add-circle-outline"></ion-icon>
											</button>

											<button
												onClick={() => removeFromWishlist(product.prod.id)}
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

					<div className="card totalCard">
						<div className="card-body text-center">
							<div className="row align-items-center">
								<div className="col-3"></div>
								<div className="col-3"></div>
								<div className="col-3">
									<h5>Total products: {wishlistInfo(wishlist)[0]}</h5>
								</div>
								<div className="col-3">
									<h4>Total: {wishlistInfo(cart)[1]}€</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}