import { useContext, useState } from "react";
import { ToastContext } from "./Toast";

function QuantitySelector({ addQuantity }) {
	const [quantity, setQuantity] = useState(1);

	const { success, error } = useContext(ToastContext);

	function updateQuantity(newQuantity) {
		const quantityAsNumber = Number(newQuantity);
		if (isNaN(quantityAsNumber) || quantityAsNumber < 0) {
			error("Invalid quantity '" + newQuantity + "'!");
			return;
		}
		setQuantity(quantityAsNumber);
	}

	return (
		<div>
			<button
				style={{ height: 25, width: 25 }}
				onClick={() => {
					updateQuantity(quantity - 1);
				}}
			>
				-
			</button>
			<input
				type="number"
				style={{ width: 25 }}
				value={quantity}
				onChange={(e) => updateQuantity(e.target.value)}
			></input>
			<button
				style={{ height: 25, width: 25 }}
				onClick={() => {
					updateQuantity(quantity + 1);
				}}
			>
				+
			</button>
			<button
				style={{ marginLeft: 5 }}
				onClick={() => {
					addQuantity(quantity);
					success("Added to cart!");
				}}
			>
				Add To Cart
			</button>
		</div>
	);
}

export default QuantitySelector;
