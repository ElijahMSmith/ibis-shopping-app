import CartDisplay from "./components/miscellaneous/CartDisplay";
import Toast from "./components/miscellaneous/Toast";

import Table from "./components/productTable/Table";
import { dummyProducts } from "./data/dummyProducts";
import useCart from "./hooks/cart";

function App() {
	const { cart, addQuantityToProduct, clearProductByID } = useCart();

	return (
		<div>
			<Table
				data={dummyProducts}
				addQuantityToProduct={addQuantityToProduct}
			></Table>
			<CartDisplay cart={cart} clearProductByID={clearProductByID} />
			<Toast text={"Hello, world!"} color="green"></Toast>
		</div>
	);
}

export default App;
