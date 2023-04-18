import "../assets/styles/cart.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function Wishlist({ userLogged, wishlist, setWishlist }) {
  const removeFromWishlist = (productId) => {
    if (userLogged) {
      setWishlist(wishlist.filter((item) => item.id !== productId));
    }
  };

  const alertRemove = (id) => {
    MySwal.fire({
      title: "Success",
      text: "The product has been removed from the wish list",
      icon: "success",
      confirmButtonColor: "#ffa500",
    }).then(() => {
      removeFromWishlist(id);
    });
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
                        src={product.photo}
                        alt="photo"
                      />
                    </div>
                    <div className="col-3">
                      <h5 class="card-title">{product.name}</h5>
                    </div>
                    <div className="col-3">
                      <h5>Price: {product.price}€</h5>
                    </div>
                    <div className="col-3">
                      <button
                        onClick={() => alertRemove(product.id)}
                        className="removeButton mx-1"
                      >
                        <ion-icon name="trash-bin-outline"></ion-icon>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
