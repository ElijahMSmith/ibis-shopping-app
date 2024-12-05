import QuantitySelector from "../miscellaneous/QuantitySelector";

function ProductListing({ product, textSize, addQuantityToProduct }) {
	return (
		<td>
			<div
				style={{
					border: "1px solid black",
					width: "100%",
					display: "flex",
					alignItems: "center",
					padding: 20,
				}}
			>
				<img style={{ maxWidth: 300 }} src={product.image} />

				<div
					style={{
						marginLeft: 32,
						display: "flex",
						flexDirection: "column",
					}}
				>
					<h2>{product.name}</h2>
					<h4>
						{product.seller} - ${product.price}
					</h4>
					<p style={{ fontSize: textSize }}>{product.description}</p>
					<QuantitySelector
						addQuantity={(howMuch) => addQuantityToProduct(product, howMuch)}
					/>
				</div>
			</div>
		</td>
	);
}

export default ProductListing;
