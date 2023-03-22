import { useNavigate } from "react-router-dom";
import "../assets/styles/categories.css";

export default function Categories() {
	const navigate = useNavigate();

	return (
		<div>
			<div className="categoriesCard">
				<div className="img">
					<img src="https://cdn-icons-png.flaticon.com/512/5110/5110777.png" alt="All categories" />
				</div>
				<div className="content">
					<h5>All categories</h5>
					<button className="button" onClick={() => navigate("/search?c=all")}>Search All</button>
				</div>
			</div>
			<div className="categoriesCard">
				<div className="img">
					<img src="https://cdn-icons-png.flaticon.com/512/1099/1099672.png" alt="Football" />
				</div>
				<div className="content">
					<h5>Football</h5>
					<button className="button" onClick={() => navigate("/search?c=football")}>Search Football</button>
				</div>
			</div>
			<div className="categoriesCard">
				<div className="img">
					<img src="https://cdn-icons-png.flaticon.com/512/217/217076.png" alt="Basketball" />
				</div>
				<div className="content">
					<h5>Basketball</h5>
					<button className="button" onClick={() => navigate("/search?c=basketball")}>Search Basketball</button>
				</div>
			</div>
			<div className="categoriesCard">
				<div className="img">
					<img src="https://cdn-icons-png.flaticon.com/512/5022/5022167.png" alt="Boxing" />
				</div>
				<div className="content">
					<h5>Boxing</h5>
					<button className="button" onClick={() => navigate("/search?c=boxing")}>Search Boxing</button>
				</div>
			</div>

			<div className="categoriesCard">
				<div className="img">
					<img src="https://cdn-icons-png.flaticon.com/512/186/186192.png" alt="Swimming" />
				</div>
				<div className="content">
					<h5>Swimming</h5>
					<button className="button" onClick={() => navigate("/search?c=swimming")}>Search Swimming</button>
				</div>
			</div>
			<div className="categoriesCard">
				<div className="img">
					<img src="https://cdn-icons-png.flaticon.com/512/1576/1576746.png" alt="Track & Field" />
				</div>
				<div className="content">
					<h5>Track & Field</h5>
					<button className="button" onClick={() => navigate("/search?c=track")}>Search Track & Field</button>
				</div>
			</div>
			<div className="categoriesCard">
				<div className="img">
					<img src="https://cdn-icons-png.flaticon.com/512/523/523686.png" alt="Tennis" />
				</div>
				<div className="content">
					<h5>Tennis</h5>
					<button className="button" onClick={() => navigate("/search?c=tennis")}>Search Tennis</button>
				</div>
			</div>
			<div className="categoriesCard">
				<div className="img">
					<img src="https://www.pngitem.com/pimgs/m/463-4635382_circle-icons-bike-bike-icon-png-circle-transparent.png" alt="Cycling" />
				</div>
				<div className="content">
					<h5>Cycling</h5>
					<button className="button" onClick={() => navigate("/search?c=cycling")}>Search Cycling</button>
				</div>
			</div>
		</div>
	);
}