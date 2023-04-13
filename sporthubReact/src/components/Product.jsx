import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/styles/product.css";

export default function Product(props) {
  const [product, setProduct] = useState();
  const [mesages, setMesages] = useState([]);

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

  return product !== undefined ? (
    <div>
      <div className="float-end w-5">
        {mesages.map((mensage, i) => (
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
            data-tor="show:scale.from(0)"
            key={i}
          >
            <strong>You added a product to the cart</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => {
                setMesages(mesages.filter((msg, i) => i !== 0));
              }}
            ></button>
          </div>
        ))}
      </div>
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
            setMesages(mesages.concat("a"));
            props.addToCart(product);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  ) : null;
}
