
export default function Cart({ userLogged, cart, setCart }){

    const removeFromCart = (product) => {
		if (userLogged) {
			cart.pop(product);
			setCart(cart);
			console.log("Product removed from cart: " + product.name);
			console.log(cart);
		}
	};

    return(
        <div>
            <h1>Shopping Cart</h1><br />
            <div className="container">
                <div className="row">
                    {cart.map((product) => {
                        return(
                            <div class="col-md-4">
                                <div class="card">
                                    <div class="card-body">
                                        <div className="cart-product-div" key={product.prod.id}>
                                            <h5 class="card-title">{product.prod.name}</h5>
                                            <img style={{ maxWidth: '30%', height: 'auto' }} src={product.prod.photo} alt="photo" />
                                            <p>Price: {product.prod.price}€</p>
                                            <p>Quantity: {product.quantity}</p>
                                            <button onClick={() => removeFromCart(product)} className="btn btn-primary">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}