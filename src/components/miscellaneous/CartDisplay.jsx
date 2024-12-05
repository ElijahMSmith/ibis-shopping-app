/*

[
    {
        product: Product;
        quantity: int;
    }
]

*/

function CartDisplay({ cart, clearProductByID }) {
	return (
		<div>
			<h3>Your Cart</h3>
			{cart.length === 0 ? (
				<p>You have nothing in your cart!</p>
			) : (
				<ul>
					{cart.map((productWithQuantity) => {
						return (
							<li key={productWithQuantity.product.id}>
								{productWithQuantity.quantity}x{" "}
								{productWithQuantity.product.name}
								<button
									onClick={() =>
										clearProductByID(productWithQuantity.product.id)
									}
								>
									Clear
								</button>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}

export default CartDisplay;
