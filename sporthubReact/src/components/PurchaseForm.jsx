import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddressSelection from "./purchaseProcess/AddressSelection";
import PaymentSelection from "./purchaseProcess/PaymentSelection";
import ShipmentSelection from "./purchaseProcess/ShipmentSelection";
import PurchaseSummary from "./purchaseProcess/PurchaseSummary";
import axios from "axios";

export default function PurchaseForm({ userLogged, cart, setCart }) {
	const navigate = useNavigate();
	const [purchaseState, setPurchaseState] = useState(0);
	const [userInformation, setUserInformation] = useState(userLogged);

	const [selectedAddress, setSelectedAddress] = useState({value: -1, address: {}});
	const [shipment, setShipment] = useState({value: -1});

	const retroceder = () => {
		setPurchaseState(purchaseState-1);
	};

	const avanzar = () => {
		setPurchaseState(purchaseState+1);
	};

	const pages = [];
	pages[0] = <AddressSelection userLogged={userInformation} cart={cart} selectedAddress={selectedAddress} setSelectedAddress={setSelectedAddress} avanzar={avanzar} />
	pages[1] = <ShipmentSelection userLogged={userInformation} cart={cart} shipment={shipment} setShipment={setShipment} avanzar={avanzar} retroceder={retroceder} />
	pages[2] = <PaymentSelection userLogged={userInformation} cart={cart} shipment={shipment} avanzar={avanzar} retroceder={retroceder} />
	pages[3] = <PurchaseSummary userLogged={userInformation} cart={cart} setCart={setCart} selectedAddress={selectedAddress} shipment={shipment} />

	useEffect(() => {
		if (userLogged == null) {
			navigate("/login");
		} else if (cart == undefined || cart.length == 0) {
			alert("Shopping cart is empty");
			navigate("/")
		} else {
			axios.get(`http://localhost:8080/userInfo/`+userLogged.username)
          .then(response => {
            if(response.data.gender === null){
                response.data.gender = "unspesified";
            }
            setUserInformation(response.data);
          })
          .catch(error => {
            console.error(error);
          });
		}
	}, []);

	return (
		<div className="container">
			<h2>Barra de progreso</h2>
			{ pages[purchaseState] }
		</div>
	);
}