import { useState } from "react";
import ProductListing from "./ProductListing";
import SearchBar from "../miscellaneous/SearchBar";

function Table({ data, addQuantityToProduct }) {
	const [filter, setFilter] = useState("");

	const filteredData = data.filter((item) => {
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
								<ProductListing
									product={product}
									addQuantityToProduct={addQuantityToProduct}
									textSize={20}
								/>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Table;
