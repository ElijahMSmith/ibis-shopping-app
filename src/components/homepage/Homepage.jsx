import { useNavigate } from "react-router";

function Homepage() {
	const navigate = useNavigate();

	return (
		<div>
			<h1>Welcome to my Shopping Application!</h1>
			<button onClick={() => navigate("/products")}>Search Products</button>
		</div>
	);
}

export default Homepage;
