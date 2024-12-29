import { useContext, useEffect, useMemo, useState } from "react";
import ProductListing from "./ProductListing";
import SearchBar from "../miscellaneous/SearchBar";
import { ToastContext } from "../miscellaneous/Toast";
import { pickRandomName } from "../../data/dummyProducts";

function Table({ addQuantityToProduct }) {
	const [products, setProducts] = useState([]);
	const [filter, setFilter] = useState("");

	const { error } = useContext(ToastContext);

	/*
    {
        id: int,
        name: string,
        description: string,
        price: float,
        discount: int,
        seller: string,
        image: string,
    }
    */

	async function getProducts() {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_BASE_URL}/products?limit=20`
			);
			if (!response.ok) {
				throw Error("Failed to retrieve products: " + response.statusText);
			}

			const data = await response.json();
			const serverProducts = data.products;
			console.log(serverProducts);

			setProducts(
				serverProducts.map((item) => {
					return {
						id: item.id,
						name: item.title,
						description: item.description,
						price: item.price,
						discount: item.discountPercentage,
						image: item.thumbnail,
						seller: pickRandomName(),
					};
				})
			);
		} catch (err) {
			error(err);
		}
	}

	useEffect(() => {
		getProducts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const filteredData = useMemo(() => {
		return products.filter((item) => {
			return item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
		});
	}, [products, filter]);

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
