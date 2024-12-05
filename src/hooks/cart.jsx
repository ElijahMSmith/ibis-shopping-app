import { useEffect, useState } from "react";

function useCart() {
	const [cart, setCart] = useState(
		JSON.parse(localStorage.getItem("cart") || "[]")
	);

	useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

	function clearProductByID(productID) {
		console.log("clearProductByID", productID);
		const newCart = cart.filter(
			(productWithQuantity) => productWithQuantity.product.id !== productID
		);
		setCart(newCart);
	}

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

	return { cart, addQuantityToProduct, clearProductByID };
}

export default useCart;
