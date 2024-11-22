import { useState } from "react";
import CartDisplay from "./components/miscellaneous/CartDisplay";
import Table from "./components/productTable/Table";
import { dummyProducts } from "./data/dummyProducts";

/*

App <- Put cart state
    Table
        SearchBar
        Group Of
            ProductListing <- YES (add to cart)
            ProductListing
            ...
    Cart Display <- YES (see current items, remove items)

*/

/*

[
    {
        product: Product;
        quantity: int;
    }
]

*/

function App() {
	const [cart, setCart] = useState([]);

	function addQuantityToProduct(product, howMuch) {
		console.log("addQuantityToProduct", product.id, howMuch);

		let found = false;
		for (let i = 0; i < cart.length; i++) {
			const productWithQuantity = cart[i];
			if (productWithQuantity.product.id === product.id) {
				productWithQuantity.quantity += howMuch;
				found = true;
				break;
			}
		}

		if (!found) {
			setCart([
				...cart,
				{
					product: product,
					quantity: howMuch,
				},
			]);
			return;
		}

		setCart([...cart]);
	}

	return (
		<div>
			<Table
				data={dummyProducts}
				addQuantityToProduct={addQuantityToProduct}
			></Table>
			<CartDisplay cart={cart} />
		</div>
	);
}

export default App;
