import { useNavigate } from "react-router-dom";

export default function SearchBar({ lastQuery, lastCategory }) {
	const navigate = useNavigate();

	const doSearch = () => {
		const query = document.getElementById("searchBar").value;
		const category = document.getElementById("categories").value;
		console.log(query);

		if (query !== "") {
			let url = "/search?c=" + category;
			if (query !== "") url += "&q=" + query;
			navigate(url);
		}
	};

	const onEnter = (e) => {
		if (e.key === 'Enter') doSearch();
	};

	return (
		<div className="p-3 mb-3 rounded bg-white">
			<h5 className="mb-3">Search what you want</h5>
			<div className="input-group mb-3">
				<input id="searchBar" type="text" className="form-control w-50" defaultValue={lastQuery} onKeyUp={(e) => onEnter(e)} />
				<select className="form-select" id="categories" defaultValue={lastCategory}>
					<option value="all">All Categories</option>
					<option value="football">Football</option>
					<option value="basketball">Basketball</option>
					<option value="boxing">Boxing</option>
					<option value="swimming">Swimming</option>
					<option value="track">Track & Field</option>
					<option value="tennis">Tennis</option>
					<option value="cycling">Cycling</option>
				</select>
				<button id="searchButton" className="btn btn-primary" onClick={() => doSearch()}>Search</button>
			</div>
		</div>
	);
}