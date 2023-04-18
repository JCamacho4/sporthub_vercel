import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import React, { useState, useEffect } from "react";
import "./assets/styles/style.css";
import axios from "axios";
import Categories from "./components/Categories";
import Search from "./components/Search";
import Product from "./components/Product";
import Cart from "./components/Cart";
import ChangePersonalInfo from "./components/ChangePersonalInfo";
import AddressSelection from "./components/purchaseProcess/AddressSelection";
import ShipmentSelection from "./components/purchaseProcess/ShipmentSelection";
import PaymentSelection from "./components/purchaseProcess/PaymentSelection";
import PurchaseSummary from "./components/purchaseProcess/PurchaseSummary";
import PurchaseForm from "./components/PurchaseForm";
import Wishlist from "./components/Wishlist.jsx";

function App() {
  const [userLogged, setUserLogged] = useState(null);
  const [cart, setCart] = useState([]);
	const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      axios
        .post("http://localhost:8080/userByToken", {
          token: localStorage.getItem("user"),
        })
        .then((response) => {
          if (response.status === 200) {
            setUserLogged(response.data);
          }
        })
        .catch((error) => {});
    }
  }, []);

  const addToCart = (product) => {
    if (userLogged) {
      //		axios.post("http://localhost:8080/addToCart", {
      //				userId: userLogged.id,
      //				productId: product.id,
      //			});
      const updatedCart = cart.map((item) => {
        if (item.prod.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      if (!updatedCart.some((item) => item.prod.id === product.id)) {
        updatedCart.push({ prod: product, quantity: 1 });
        console.log("Product added to cart: " + product.name);
      }

      setCart(updatedCart);
    }
  };

	const addToWishlist = (product) => {
		if (userLogged) {
//		axios.post("http://localhost:8080/addToWishlist", {
//				userId: userLogged.id,
//				productId: product.id,
//			});
			const updatedWishlist = wishlist.map((item) => {
				if (item.prod.id === product.id) {
					return { ...item, quantity: item.quantity + 1 };
				}
				return item;
			});
			
			if (!updatedWishlist.some((item) => item.prod.id === product.id)) {
				updatedWishlist.push({ prod: product, quantity: 1 });
				console.log("Product added to wishlist: " + product.name);
			}
			
			console.log(updatedWishlist);
			setWishlist(updatedWishlist);
		}
	};

  const removeFromCart = (product) => {
    if (userLogged) {
      //		axios.post("http://localhost:8080/addToCart", {
      //				userId: userLogged.id,
      //				productId: product.id,
      //			});
      const updatedCart = cart.map((item) => {
        if (item.prod.id === product.id && item.quantity === 1) {
          return;
        } else if (item.prod.id === product.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

      if (!updatedCart.some((item) => item.prod.id === product.id)) {
        return;
      }

      setCart(updatedCart);
    }
  };

  const productList = [
    {
      id: 1,
      name: "Brooks running shoes",
      category: "track",
      description: "Unused running shoes",
      photo:
        "https://www.brooksrunning.com/dw/image/v2/BGPF_PRD/on/demandware.static/-/Sites-brooks-master-catalog/default/dw19820951/original/110393/110393-407-l-ghost-15-mens-neutral-cushion-running-shoe.png?sw=425&sh=425&sm=fit",
      price: 50,
    },
    {
      id: 2,
      name: "Babolat tennis racket",
      category: "tennis",
      description: "Babolat tennis racket",
      photo:
        "https://cdn11.bigcommerce.com/s-65f1mln0/images/stencil/600x600/products/3401/16541/20Pure_Aero___77651.1618612938.png?c=2",
      price: 50,
    },
    {
      id: 3,
      name: "Wilson Basketball",
      category: "basketball",
      description: "",
      photo:
        "https://target.scene7.com/is/image/Target/GUEST_20affc7e-e0d7-4eb6-a6f3-68d13520f8be?wid=488&hei=488&fmt=pjpeg",
      price: 20,
    },
    {
      id: 4,
      name: "Nike Football Boots",
      category: "football",
      description: "",
      photo: "https://img.fruugo.com/product/0/10/238646100_max.jpg",
      price: 90,
    },
    {
      id: 5,
      name: "Swimming Suit",
      category: "swimming",
      description: "",
      photo: "https://www.sportsdirect.com/images/imgzoom/35/35346203_xxl.jpg",
      price: 30,
    },
    {
      id: 6,
      name: "Road Bike",
      category: "cycling",
      description: "",
      photo:
        "https://www.wigglestatic.com/product-media/100375136/Brand-X-Road-Bike-Road-Bikes-Black-2017-BRNDXROADXL-0.jpg",
      price: 200,
    },
    {
      id: 7,
      name: "Everlast Boxing Gloves",
      category: "boxing",
      description: "",
      photo: "https://www.sportsdirect.com/images/imgzoom/76/76233103_xxl.jpg",
      price: 55,
    },
  ];

  return (
    <div>
      <BrowserRouter>
        <Nav
          userLogged={userLogged}
          setUserLogged={setUserLogged}
          cart={cart}
        />
        <div className="container main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route
              path="/login"
              element={
                <Login userLogged={userLogged} setUserLogged={setUserLogged} />
              }
            />
            <Route
              path="/signup"
              element={
                <SignUp userLogged={userLogged} setUserLogged={setUserLogged} />
              }
            />
            <Route
              path="/profile/:username"
              element={
                <Profile
                  userLogged={userLogged}
                  setUserLogged={setUserLogged}
                />
              }
            />
            <Route path="/categories" element={<Categories />} />
            <Route
              path="/categories/:category"
              element={
                <Profile
                  userLogged={userLogged}
                  setUserLogged={setUserLogged}
                />
              }
            />

            <Route
              path="/search"
              element={
                <Search
                  userLogged={userLogged}
                  setUserLogged={setUserLogged}
                  productList={productList}
                />
              }
            />
            <Route
              path="/product/:productId"
              element={
                <Product
                  userLogged={userLogged}
                  setUserLogged={setUserLogged}
                  productList={productList}
                  addToCart={addToCart}
                  addToWishlist={addToWishlist}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart userLogged={userLogged} cart={cart} setCart={setCart} />
              }
            />
            <Route
              path="/profile/:username/change-personal-info"
              element={
                <ChangePersonalInfo
                  userLogged={userLogged}
                  setUserLogged={setUserLogged}
                />
              }
            />
						<Route 
							path="/wishlist"
							element={<Wishlist userLogged={userLogged} wishlist={wishlist} setWishlist={setWishlist} />} />
						<Route 
							path="/purchaseFinish"
							element={
								<PurchaseForm
									userLogged={userLogged}
									cart={cart}
									setCart={setCart}
								/>
							}
						/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
