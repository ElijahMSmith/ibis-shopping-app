import { useState } from "react";
import ProductListing from "./ProductListing";
import SearchBar from "./SearchBar";

function Table(props) {
	const [filter, setFilter] = useState("");

	const filteredData = props.data.filter((item) => {
		return item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
	});

	return (
		<div>
			<SearchBar setNewFilter={setFilter} />
			<table>
				<tbody>
					{filteredData.map((product) => {
						return (
							<tr key={product.id}>
								<ProductListing product={product} textSize={20} />
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Table;
