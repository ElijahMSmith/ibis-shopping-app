import CartDisplay from "./components/miscellaneous/CartDisplay";

import Table from "./components/productTable/Table";
import useCart from "./hooks/cart";
import ToastProvider from "./components/miscellaneous/Toast";
import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./components/homepage/Homepage";
import NotFound from "./components/notfound/NotFound";
import Product from "./components/product/Product";

function App() {
	const { cart, addQuantityToProduct, clearProductByID } = useCart();

	return (
		<>
			<ToastProvider>
				<BrowserRouter>
					<Routes>
						<Route index element={<Homepage />} />
						<Route path="/products">
							<Route
								index
								element={
									<>
										<Table addQuantityToProduct={addQuantityToProduct}></Table>
										<CartDisplay
											cart={cart}
											clearProductByID={clearProductByID}
										/>
									</>
								}
							/>
							<Route path=":id" element={<Product />} />
						</Route>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</ToastProvider>
		</>
	);
}

export default App;
