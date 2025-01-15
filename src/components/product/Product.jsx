import { useParams } from "react-router";
import { pickRandomName } from "../../data/dummyProducts";
import { useContext, useEffect, useState } from "react";
import { ToastContext } from "../miscellaneous/Toast";

function Product() {
	const [product, setProduct] = useState(null);

	const { id } = useParams();
	const { error } = useContext(ToastContext);

	async function getProduct() {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_BASE_URL}/products/${id}`
			);
			if (!response.ok) {
				throw Error("Failed to retrieve products: " + response.statusText);
			}

			const item = await response.json();

			setProduct({
				id: item.id,
				name: item.title,
				description: item.description,
				price: item.price,
				discount: item.discountPercentage,
				image: item.thumbnail,
				seller: pickRandomName(),
			});
		} catch (err) {
			error(err);
		}
	}

	useEffect(() => {
		getProduct();
	}, []);

	if (!product) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			<h1>{product.name}</h1>
			<h5>{product.description}</h5>
			<img src={product.image}></img>
		</div>
	);
}

export default Product;
