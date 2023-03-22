import { useLocation } from "react-router-dom";

export default function Product(props){
    const location = useLocation();
    const product = location.state;

    return(
        <div>
            <h1>Product</h1>
            {console.log(props)}
        </div>
    )
}