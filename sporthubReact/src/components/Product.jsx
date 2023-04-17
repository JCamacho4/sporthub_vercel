import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/styles/product.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

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

  const handleClick = (result) => {
    if (result.isConfirmed) {
      props.addToCart(product);
      MySwal.fire({
        title: "Success",
        text: "The product has been added to the cart",
        icon: "success",
        confirmButtonColor: "#ffa500",
      });
    }
  };

  return product !== undefined ? (
    <div className="product-div">
      <h1>{product.name}</h1>
      <img
        style={{ maxWidth: "30%", height: "auto" }}
        src={product.photo}
        alt="photo"
      />
      <p>{product.description}</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          MySwal.fire({
            title: "Confirmation needed",
            text: "Please confirm to add the product to the cart",
            icon: "info",
            showCancelButton: true,
            confirmButtonText: "Confirm",
            confirmButtonColor: "#ffa500",
            denyButtonText: "Deny",
          }).then(handleClick);
        }}
      >
        Add to cart
      </button>
    </div>
  ) : null;
}
