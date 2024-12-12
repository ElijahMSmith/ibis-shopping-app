import CartDisplay from "./components/miscellaneous/CartDisplay";
import ToastProvider from "./components/miscellaneous/Toast";
import Table from "./components/productTable/Table";
import { dummyProducts } from "./data/dummyProducts";
import useCart from "./hooks/cart";

function App() {
	const { cart, addQuantityToProduct, clearProductByID } = useCart();

	return (
		<div>
			<ToastProvider>
				<Table
					data={dummyProducts}
					addQuantityToProduct={addQuantityToProduct}
				></Table>
				<CartDisplay cart={cart} clearProductByID={clearProductByID} />
			</ToastProvider>
		</div>
	);
}

export default App;
