import { dummyProducts } from "./data/dummyProducts";

function App() {
	let data = dummyProducts;

	return (
		<div>
			{data.map((product) => {
				return (
					<div key={product.id}>
						<p>{product.name}</p>
						<p>{product.description}</p>
						<p>{product.price}</p>
						<img src={product.image} />
					</div>
				);
			})}
		</div>
	);
}

export default App;
