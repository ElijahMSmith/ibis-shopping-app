import CartDisplay from "./components/miscellaneous/CartDisplay";

import Table from "./components/productTable/Table";
import { dummyProducts } from "./data/dummyProducts";
import useCart from "./hooks/cart";
import ToastProvider from "./components/miscellaneous/Toast";

function App() {
	const { cart, addQuantityToProduct, clearProductByID } = useCart();

	return (
		<>
			<ToastProvider>
				<Table
					data={dummyProducts}
					addQuantityToProduct={addQuantityToProduct}
				></Table>
				<CartDisplay cart={cart} clearProductByID={clearProductByID} />
			</ToastProvider>
		</>
	);
}

export default App;
