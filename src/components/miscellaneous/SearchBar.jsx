import { useState } from "react";

function SearchBar({ setNewFilter }) {
	const [searchTerm, setSearchTerm] = useState("");

	function handleFormSubmission(event) {
		event.preventDefault();
		setNewFilter(searchTerm);
		setSearchTerm("");
	}

	return (
		<div style={{ marginBottom: 10 }}>
			<form onSubmit={handleFormSubmission}>
				<p>Search for products</p>
				<input
					onChange={(e) => setSearchTerm(e.target.value)}
					value={searchTerm}
				></input>
				<button type="submit">Search</button>
			</form>
		</div>
	);
}

export default SearchBar;
