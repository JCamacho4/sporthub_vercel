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

function App() {
	const [userLogged, setUserLogged] = useState(null);

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
				.catch((error) => { });
		}
	}, []);

	const productList = [
		{
			name: "Brooks running shoes",
			category: "track",
			description: "Unused running shoes",
			photo: "https://www.brooksrunning.com/dw/image/v2/BGPF_PRD/on/demandware.static/-/Sites-brooks-master-catalog/default/dw13a6b6c1/original/110366/110366-435-l-adrenaline-gts-22-mens-cushion-running-shoe.jpg?sw=1388&sh=868&sm=cut&sfrm=png&bgcolor=F1F3F6",
			price: 50
		},
		{
			name: "Babolat tennis racket",
			category: "tennis",
			description: "Babolat tennis racket",
			photo: "https://cdn11.bigcommerce.com/s-65f1mln0/images/stencil/600x600/products/3401/16541/20Pure_Aero___77651.1618612938.png?c=2",
			price: 50
		},
		{
			name: "Wilson Basketball",
			category: "basketball",
			description: "",
			photo: "https://target.scene7.com/is/image/Target/GUEST_20affc7e-e0d7-4eb6-a6f3-68d13520f8be?wid=488&hei=488&fmt=pjpeg",
			price: 20
		},
		{
			name: "Nike Football Boots",
			category: "football",
			description: "",
			photo: "https://img.fruugo.com/product/0/10/238646100_max.jpg",
			price: 90
		},
		{
			name: "Swimming Suit",
			category: "swimming",
			description: "",
			photo: "https://www.sportsdirect.com/images/imgzoom/35/35346203_xxl.jpg",
			price: 30
		},
		{
			name: "Road Bike",
			category: "cycling",
			description: "",
			photo: "https://www.wigglestatic.com/product-media/100375136/Brand-X-Road-Bike-Road-Bikes-Black-2017-BRNDXROADXL-0.jpg",
			price: 200
		},
		{
			name: "Everlast Boxing Gloves",
			category: "boxing",
			description: "",
			photo: "https://www.sportsdirect.com/images/imgzoom/76/76233103_xxl.jpg",
			price: 55
		}
	];

	return (
		<div>
			<BrowserRouter>
				<Nav userLogged={userLogged} setUserLogged={setUserLogged} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about-us" element={<AboutUs />} />
					<Route
						path="/login"
						element={
							<Login userLogged={userLogged} setUserLogged={setUserLogged} />
						}
					></Route>
					<Route
						path="/signup"
						element={
							<SignUp userLogged={userLogged} setUserLogged={setUserLogged} />
						}
					>
						{" "}
					</Route>
					<Route
						path="/profile/:username"
						element={<Profile userLogged={userLogged} setUserLogged={setUserLogged} />} />

					<Route
						path="/categories"
						element={<Categories />} />
					<Route
						path="/categories/:category"
						element={<Profile userLogged={userLogged} setUserLogged={setUserLogged} />} />

					<Route
						path="/search"
						element={<Search userLogged={userLogged} setUserLogged={setUserLogged} productList={productList} />} />
					<Route
						// cambiar nombre a id cuando este
						path="/product/:product"
						element={<Product userLogged={userLogged} setUserLogged={setUserLogged} productList={productList}/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
