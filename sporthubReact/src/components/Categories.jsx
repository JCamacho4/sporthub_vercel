import "../assets/styles/categories.css"

export default function Categories() {
	return (
		<div className="container">
			<div className="card">
				<div className="img">
					<img src="https://cdn-icons-png.flaticon.com/512/5110/5110777.png" alt="All categories" />
				</div>
				<div className="content">
					<h3>All categories</h3>
					<button className="button">Search All</button>
				</div>
			</div>
			<div className="card">
				<div className="img">
					<img src="https://cdn-icons-png.flaticon.com/512/1099/1099672.png" alt="Football" />
				</div>
				<div className="content">
					<h3>Football</h3>
					<button className="button">Search Football</button>
				</div>
			</div>
			<div className="card">
				<div className="img">
					<img src="https://cdn-icons-png.flaticon.com/512/217/217076.png" alt="Basketball" />
				</div>
				<div className="content">
					<h3>Basketball</h3>
					<button className="button">Search Basketball</button>
				</div>
			</div>
			<div className="card">
				<div className="img">
					<img src="https://cdn-icons-png.flaticon.com/512/5022/5022167.png" alt="Boxing" />
				</div>
				<div className="content">
					<h3>Boxing</h3>
					<button className="button">Search Boxing</button>
				</div>
			</div>

			<div className="card">
				<div className="img">
					<img src="https://cdn-icons-png.flaticon.com/512/186/186192.png" alt="Swimming" />
				</div>
				<div className="content">
					<h3>Swimming</h3>
					<button className="button">Search Swimming</button>
				</div>
			</div>
			<div className="card">
				<div className="img">
					<img src="https://cdn-icons-png.flaticon.com/512/1576/1576746.png" alt="Track & Field" />
				</div>
				<div className="content">
					<h3>Track & Field</h3>
					<button className="button">Search Track & Field</button>
				</div>
			</div>
			<div className="card">
				<div className="img">
					<img src="https://cdn-icons-png.flaticon.com/512/523/523686.png" alt="Tennis" />
				</div>
				<div className="content">
					<h3>Tennis</h3>
					<button className="button">Search Tennis</button>
				</div>
			</div>
			<div className="card">
				<div className="img">
					<img src="https://www.pngitem.com/pimgs/m/463-4635382_circle-icons-bike-bike-icon-png-circle-transparent.png" alt="Cycling" />
				</div>
				<div className="content">
					<h3>Cycling</h3>
					<button className="button">Search Cycling</button>
				</div>
			</div>
		</div>
	);
}